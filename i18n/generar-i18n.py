#!/usr/bin/env python3
"""Rehace js/i18n.js desde los cinco diccionarios de i18n/.

LA TRAMPA DE ESTE REPO: los JSON de i18n/ son la fuente, pero el navegador
solo lee js/i18n.js. Si tocas un JSON y no ejecutas esto, el cambio no llega
a la web y nadie se entera. Antes había que hacerlo a mano; ya no.

    python3 i18n/generar-i18n.py

El motor (todo lo que va a partir de «let __lang») se conserva tal cual del
fichero actual: aquí solo se regeneran los diccionarios.
"""
import json, pathlib, sys

RAIZ = pathlib.Path(__file__).resolve().parent.parent
IDIOMAS = ['es', 'de', 'en', 'no', 'sv']
DESTINO = RAIZ / 'js/i18n.js'

dics = {}
for lang in IDIOMAS:
    nombre = 'i18n-fuente-es.json' if lang == 'es' else f'i18n-{lang}.json'
    dics[lang] = json.load(open(RAIZ / f'i18n/{nombre}', encoding='utf-8'))

claves = list(dics['es'])
for lang in IDIOMAS[1:]:
    faltan = [k for k in claves if k not in dics[lang]]
    sobran = [k for k in dics[lang] if k not in claves]
    if faltan or sobran:
        sys.exit(f'ERROR en {lang}: faltan {faltan[:5]} · sobran {sobran[:5]}')

actual = DESTINO.read_text(encoding='utf-8')
corte = actual.find('let __lang')
if corte == -1:
    sys.exit('ERROR: no encuentro «let __lang» en js/i18n.js; no toco nada')
motor = actual[corte:]

cab = ('/* Diccionarios y motor de i18n de activala.es.\n'
       '   NO EDITAR LOS DICCIONARIOS A MANO: se generan desde i18n/*.json\n'
       '   con i18n/generar-i18n.py. El motor de abajo sí se edita aquí. */\n')


def js(d):
    filas = ',\n'.join(f'  {json.dumps(k, ensure_ascii=False)}: {json.dumps(v, ensure_ascii=False)}'
                       for k, v in d.items())
    return '{\n' + filas + '\n }'


cuerpo = ',\n '.join(f'{lang}: {js(dics[lang])}' for lang in IDIOMAS)
salida = cab + 'const I18N = {\n ' + cuerpo + '\n};\n\n' + motor
DESTINO.write_text(salida, encoding='utf-8')
print(f'OK js/i18n.js: {len(claves)} claves x {len(IDIOMAS)} idiomas, {len(salida)} bytes')
