#!/usr/bin/env python3
# Genera js/legal-i18n.js desde i18n/legal-fuente-es.json + legal-{de,en,no,sv}.json.
# La trampa clásica de este repo: los JSON son la FUENTE, pero el navegador solo
# lee el JS generado. Tras tocar cualquier JSON, vuelve a ejecutar este script.
#   python3 i18n/generar-legal-i18n.py
import json, pathlib, sys

RAIZ = pathlib.Path(__file__).resolve().parent.parent
IDIOMAS = ['es', 'de', 'en', 'no', 'sv']

dics = {}
for lang in IDIOMAS:
    nombre = 'legal-fuente-es.json' if lang == 'es' else f'legal-{lang}.json'
    dics[lang] = json.load(open(RAIZ / 'i18n' / nombre, encoding='utf-8'))

claves_es = list(dics['es'])
for lang in IDIOMAS[1:]:
    if list(dics[lang]) != claves_es:
        sys.exit(f'ERROR: las claves de {lang} no coinciden con el español')

def js(d):
    filas = ',\n'.join(f'  {json.dumps(k, ensure_ascii=False)}: {json.dumps(v, ensure_ascii=False)}'
                       for k, v in d.items())
    return '{\n' + filas + '\n }'

cuerpos = ',\n '.join(f'{lang}: {js(dics[lang])}' for lang in IDIOMAS)

MOTOR = """
let __lang = 'es';
window.__t = k => (I18N[__lang] && I18N[__lang][k]) || I18N.es[k] || '';

function aplicarIdioma(lang){
  __lang = I18N[lang] ? lang : 'es';
  document.querySelectorAll('[data-i]').forEach(el => {
    const v = window.__t(el.dataset.i);
    if (v) el.innerHTML = v;
  });
  document.querySelectorAll('[data-i-ph]').forEach(el => {
    const v = window.__t(el.dataset.iPh);
    if (v) el.setAttribute('placeholder', v);
  });
  document.querySelectorAll('[data-i-content]').forEach(el => {
    const v = window.__t(el.dataset.iContent);
    if (v) el.setAttribute('content', v);
  });
  document.documentElement.lang = __lang;
  document.querySelectorAll('.idiomas button').forEach(b => {
    if (b.dataset.lang === __lang) b.setAttribute('aria-current','true');
    else b.removeAttribute('aria-current');
  });
  if (typeof window.__alCambiarIdioma === 'function') window.__alCambiarIdioma();
  try { localStorage.setItem('activala_lang', __lang); } catch(e) {}
}

document.querySelectorAll('.idiomas button').forEach(b => {
  b.addEventListener('click', () => aplicarIdioma(b.dataset.lang));
});

/* Idioma inicial: el guardado (compartido con toda la web); si no, el del navegador */
try {
  let inicial = localStorage.getItem('activala_lang');
  if (!inicial) {
    const nav = (navigator.language || 'es').slice(0,2).toLowerCase();
    if (I18N[nav]) inicial = nav;
    if (nav === 'nb' || nav === 'nn') inicial = 'no';
  }
  if (inicial && inicial !== 'es') aplicarIdioma(inicial);
} catch(e) {}
"""

CABECERA = """/* Motor i18n de las páginas legales (privacidad, aviso legal, cookies).
   Va aparte de js/i18n.js a propósito: estas ~86 claves de texto largo solo
   las cargan las tres páginas legales, no la portada.
   NO EDITAR A MANO: se genera desde i18n/legal-*.json con
   i18n/generar-legal-i18n.py. Mismo mecanismo que js/i18n.js
   (data-i innerHTML, data-i-ph placeholder) más data-i-content
   para el content de <meta name="description"> y el <title>. */
"""

salida = CABECERA + 'const I18N = {\n ' + cuerpos + '\n};\n' + MOTOR
(RAIZ / 'js' / 'legal-i18n.js').write_text(salida, encoding='utf-8')
print(f'OK js/legal-i18n.js generado: {len(claves_es)} claves x {len(IDIOMAS)} idiomas, {len(salida)} bytes')
