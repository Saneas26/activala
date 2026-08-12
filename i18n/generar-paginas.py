#!/usr/bin/env python3
"""Genera las páginas traducidas de activala.es, una carpeta por idioma.

Por qué existe: la web se traducía SOLO en el navegador, y los robots de Google
no ejecutan ese motor — guardaban las tres páginas en español y nada más. Con
esto, cada idioma tiene su URL con el HTML ya traducido, que es lo que Google
puede indexar.

    python3 i18n/generar-paginas.py

Escribe /de/, /en/, /no/ y /sv/ con index, activar y alquilar dentro. El español
se queda en la raíz, tal cual está. Al tocar un texto o una página hay que
volver a ejecutarlo, o las traducciones se quedarán atrás EN SILENCIO.
"""
import json, pathlib, re, sys

RAIZ = pathlib.Path(__file__).resolve().parent.parent
IDIOMAS = ['de', 'en', 'no', 'sv']          # el español es la raíz
PAGINAS = ['index.html', 'activar.html', 'alquilar.html']
RUTA = {'index.html': '', 'activar.html': 'activar', 'alquilar.html': 'alquilar'}
BASE = 'https://activala.es'

dic = {'es': json.load(open(RAIZ / 'i18n/i18n-fuente-es.json', encoding='utf-8'))}
for l in IDIOMAS:
    dic[l] = json.load(open(RAIZ / f'i18n/i18n-{l}.json', encoding='utf-8'))

# Los <title> y las <meta description> van aparte: no son traducción del
# español, son lo que la gente teclea de verdad en Google en cada país.
meta = {'es': json.load(open(RAIZ / 'i18n/meta-seo-es.json', encoding='utf-8'))}
for l in IDIOMAS:
    meta[l] = json.load(open(RAIZ / f'i18n/meta-seo-{l}.json', encoding='utf-8'))


def t(lang, clave):
    """El texto de esa clave; si falta, cae al español (igual que el motor)."""
    return dic[lang].get(clave) or dic['es'].get(clave, '')


def traducir_marcados(html, lang):
    """Sustituye el contenido de cada elemento con data-i / data-i-ph.

    Se hace por texto, no con un parser, porque las páginas son HTML plano
    escrito a mano y así el resultado conserva el formato original intacto.
    """
    def cuerpo(m):
        apertura, etiqueta, clave, dentro = m.group(0), m.group(1), m.group(2), m.group(3)
        v = t(lang, clave)
        return apertura.replace(dentro, v, 1) if v else apertura

    # <tag ... data-i="clave" ...>contenido</tag>  (sin anidar la misma etiqueta)
    patron = re.compile(
        r'<(\w+)([^>]*\sdata-i="([^"]+)"[^>]*)>(.*?)</\1>', re.S)

    def repl(m):
        etiqueta, attrs, clave, dentro = m.groups()
        v = t(lang, clave)
        if not v:
            return m.group(0)
        return f'<{etiqueta}{attrs}>{v}</{etiqueta}>'

    html = patron.sub(repl, html)

    # placeholders
    def repl_ph(m):
        entero, clave = m.group(0), m.group(1)
        v = t(lang, clave)
        if not v:
            return entero
        if 'placeholder="' in entero:
            return re.sub(r'placeholder="[^"]*"', f'placeholder="{v}"', entero)
        return entero[:-1] + f' placeholder="{v}">'

    html = re.sub(r'<[^>]*\sdata-i-ph="([^"]+)"[^>]*>', repl_ph, html)
    return html


def cabecera(html, lang, pagina):
    """lang del documento, hreflang, canonical y og:locale de cada versión."""
    ruta = RUTA[pagina]
    html = html.replace('<html lang="es">', f'<html lang="{lang}">', 1)

    # canonical: cada idioma es canónico de sí mismo
    canonico = f'{BASE}/{lang}/{ruta}'.rstrip('/') + ('/' if not ruta else '')
    html = re.sub(r'<link rel="canonical" href="[^"]*">',
                  f'<link rel="canonical" href="{canonico}">', html, count=1)

    # hreflang de las cinco versiones + x-default al español
    es_url = f'{BASE}/{ruta}'.rstrip('/') + ('/' if not ruta else '')
    alternos = [f'<link rel="alternate" hreflang="es" href="{es_url}">']
    for l in IDIOMAS:
        u = f'{BASE}/{l}/{ruta}'.rstrip('/') + ('/' if not ruta else '')
        alternos.append(f'<link rel="alternate" hreflang="{l}" href="{u}">')
    alternos.append(f'<link rel="alternate" hreflang="x-default" href="{es_url}">')
    html = html.replace('<link rel="canonical"',
                        '\n'.join(alternos) + '\n<link rel="canonical"', 1)

    locales = {'de': 'de_DE', 'en': 'en_GB', 'no': 'nb_NO', 'sv': 'sv_SE'}
    html = re.sub(r'<meta property="og:locale" content="[^"]*">',
                  f'<meta property="og:locale" content="{locales[lang]}">', html, count=1)

    # og:url y og:title/description con el texto del idioma
    html = re.sub(r'<meta property="og:url" content="[^"]*">',
                  f'<meta property="og:url" content="{canonico}">', html, count=1)

    clave = (ruta or 'home')
    titulo = meta[lang].get(clave + '_title', '')
    desc = meta[lang].get(clave + '_desc', '')
    if titulo:
        html = re.sub(r'<title>.*?</title>', f'<title>{titulo}</title>', html, count=1, flags=re.S)
        html = re.sub(r'<meta property="og:title" content="[^"]*">',
                      f'<meta property="og:title" content="{titulo}">', html, count=1)
    if desc:
        html = re.sub(r'<meta name="description" content="[^"]*">',
                      f'<meta name="description" content="{desc}">', html, count=1)
        html = re.sub(r'<meta property="og:description" content="[^"]*">',
                      f'<meta property="og:description" content="{desc}">', html, count=1)
    return html


def enlaces(html, lang):
    """Las páginas de un idioma enlazan entre sí dentro de su carpeta, y el
    selector navega a la misma página en el otro idioma."""
    html = html.replace('href="/activar.html"', f'href="/{lang}/activar"')
    html = html.replace('href="/alquilar.html"', f'href="/{lang}/alquilar"')
    html = re.sub(r'href="/activar"', f'href="/{lang}/activar"', html)
    html = re.sub(r'href="/alquilar"', f'href="/{lang}/alquilar"', html)
    # el logo vuelve a la portada del idioma
    html = html.replace('<a class="logo" href="/">', f'<a class="logo" href="/{lang}/">')
    html = html.replace('class="logo" href="/"', f'class="logo" href="/{lang}/"')
    return html


def selector(html, lang, pagina):
    """El selector deja de ser solo un cambio de texto: navega a la URL del idioma."""
    ruta = RUTA[pagina]
    botones = []
    for l in ['es'] + IDIOMAS:
        destino = (f'/{ruta}' if l == 'es' else f'/{l}/{ruta}') or '/'
        if l != 'es' and not ruta:
            destino = f'/{l}/'
        actual = ' aria-current="true"' if l == lang else ''
        botones.append(f'<a href="{destino}"{actual}>{l.upper()}</a>')
    nuevo = '\n      '.join(botones)
    html = re.sub(r'(<nav class="idiomas"[^>]*>).*?(</nav>)',
                  lambda m: m.group(1) + '\n      ' + nuevo + '\n    ' + m.group(2),
                  html, count=1, flags=re.S)
    # el selector pasa de <button> a <a>: sin esto se vería como enlaces
    # sueltos, subrayados y azules, en vez de las píldoras de siempre
    html = html.replace('.idiomas button{', '.idiomas a,.idiomas button{')
    html = html.replace('.idiomas button:hover{', '.idiomas a:hover,.idiomas button:hover{')
    html = html.replace('.idiomas button[aria-current="true"]{',
                        '.idiomas a[aria-current="true"],.idiomas button[aria-current="true"]{')
    html = html.replace('.idiomas a,.idiomas button{font:inherit;',
                        '.idiomas a,.idiomas button{font:inherit;text-decoration:none;')
    return html


def main():
    escritas = 0
    for lang in IDIOMAS:
        carpeta = RAIZ / lang
        carpeta.mkdir(exist_ok=True)
        for pagina in PAGINAS:
            html = (RAIZ / pagina).read_text(encoding='utf-8')
            html = traducir_marcados(html, lang)
            html = cabecera(html, lang, pagina)
            html = enlaces(html, lang)
            html = selector(html, lang, pagina)
            # el motor de i18n ya no hace falta: el HTML llega traducido
            html = html.replace('<script src="/js/i18n.js"></script>',
                                '<script src="/js/idioma-guardado.js"></script>')
            destino = carpeta / pagina
            destino.write_text(html, encoding='utf-8')
            escritas += 1
        print(f'  /{lang}/ → {len(PAGINAS)} páginas')
    print(f'OK {escritas} páginas generadas')

    if any('data-i="' in (RAIZ / l / p).read_text(encoding='utf-8')
           and t(l, 'h1') == '' for l in IDIOMAS for p in PAGINAS):
        sys.exit('ERROR: faltan traducciones')


if __name__ == '__main__':
    main()
