#!/usr/bin/env python3
"""Rehace sitemap.xml con las 20 URLs públicas (5 idiomas x 4 páginas).

    python3 i18n/generar-sitemap.py 2026-08-12

La fecha es opcional; si no se pasa, mantiene la que ya hubiera en el fichero,
porque tocar el lastmod sin haber cambiado nada le dice a Google una mentira.

Las páginas legales NO entran a propósito: llevan noindex.
"""
import pathlib, re, sys

RAIZ = pathlib.Path(__file__).resolve().parent.parent
BASE = 'https://activala.es'
IDIOMAS = ['de', 'en', 'no', 'sv']
PAGINAS = [('', '1.0'), ('activar', '0.9'), ('alquilar', '0.9'), ('ayuda', '0.6')]

anterior = (RAIZ / 'sitemap.xml').read_text(encoding='utf-8') if (RAIZ / 'sitemap.xml').exists() else ''
if len(sys.argv) > 1:
    fecha = sys.argv[1]
else:
    m = re.search(r'<lastmod>([^<]+)</lastmod>', anterior)
    fecha = m.group(1) if m else '2026-08-12'

filas = []
for ruta, prio in PAGINAS:
    for lang in [None] + IDIOMAS:
        url = f'{BASE}/' if not ruta and lang is None else (
              f'{BASE}/{ruta}' if lang is None else (
              f'{BASE}/{lang}/' if not ruta else f'{BASE}/{lang}/{ruta}'))
        # el español pesa un poco más: es la versión de referencia (x-default)
        p = prio if lang is None else f'{float(prio) - 0.1:.1f}'
        alternos = []
        for l in [None] + IDIOMAS:
            u = f'{BASE}/' if not ruta and l is None else (
                f'{BASE}/{ruta}' if l is None else (
                f'{BASE}/{l}/' if not ruta else f'{BASE}/{l}/{ruta}'))
            alternos.append(
                f'    <xhtml:link rel="alternate" hreflang="{l or "es"}" href="{u}"/>')
        es_url = f'{BASE}/' if not ruta else f'{BASE}/{ruta}'
        alternos.append(f'    <xhtml:link rel="alternate" hreflang="x-default" href="{es_url}"/>')
        filas.append(
            f'  <url><loc>{url}</loc><lastmod>{fecha}</lastmod><priority>{p}</priority>\n'
            + '\n'.join(alternos) + '\n  </url>')

salida = ('<?xml version="1.0" encoding="UTF-8"?>\n'
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n'
          '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
          + '\n'.join(filas) + '\n</urlset>\n')
(RAIZ / 'sitemap.xml').write_text(salida, encoding='utf-8')
print(f'OK sitemap.xml con {len(filas)} URLs (fecha {fecha})')
