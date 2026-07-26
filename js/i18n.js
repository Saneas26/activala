/* Activala · i18n
   ES es el máster (vive en el HTML). Aquí solo van las CADENAS CRÍTICAS
   traducidas del documento de copys (DE/EN/NO/SV, revisadas, no automáticas).
   Una clave que no exista en el idioma elegido cae al español del HTML.
   PENDIENTE: el resto de secciones se traduce con copy nativo (fase 2 del doc). */

const I18N = {
  de: {
    'd1.t': 'Ich habe ein Haus', 'd1.s': 'Ich möchte es aktivieren, es soll sich rentieren',
    'd2.t': 'Ich suche ein Haus', 'd2.s': 'Von 1 Woche bis 6 Monate',
    'h1': 'Wir vermieten keine Häuser.<br><em>Wir aktivieren Ihre Immobilie.</em>',
    'lede': 'Sehen Sie jede Woche, wie Ihr Haus dasteht: <b>gereinigt, gepflegt und mit Einnahmen.</b>',
    's1': 'Wir verdienen nur, wenn Ihr Haus vermietet ist',
    's2': 'Keine Mindestlaufzeit', 's3': 'Keine Exklusivität',
    'vacia': 'Steht das Haus leer, zahlen Sie nichts',
    'promesa': 'Sie bekommen Ihr Haus so zurück, wie Sie es verlassen haben. Geht etwas kaputt, reparieren oder ersetzen wir es.',
    'v1.c': 'Aus Hamburg', 'v1.e': 'Ihr Haus in Maspalomas, aktiv',
  },
  en: {
    'd1.t': 'I own a home', 'd1.s': "I want it working, not empty",
    'd2.t': "I'm looking for a home", 'd2.s': 'From 1 week to 6 months',
    'h1': "We don't just rent homes.<br><em>We put your property to work.</em>",
    'lede': 'See how your home is doing every week: <b>clean, maintained and earning.</b>',
    's1': 'We only get paid when your home is active',
    's2': 'No lock-in', 's3': 'Non-exclusive',
    'vacia': 'Empty home, nothing to pay',
    'promesa': 'You get your home back exactly as you left it. If something breaks, we repair or replace it.',
    'v2.c': 'From London', 'v2.e': 'Let until May',
  },
  no: {
    'd1.t': 'Jeg har et hus', 'd1.s': 'Jeg vil aktivere det og få inntekt',
    'd2.t': 'Jeg leter etter bolig', 'd2.s': 'Fra 1 uke til 6 måneder',
    'h1': 'Vi leier ikke bare ut boliger.<br><em>Vi aktiverer eiendommen din.</em>',
    'lede': 'Se hvordan boligen din har det hver uke: <b>rengjort, vedlikeholdt og med inntekt.</b>',
    's1': 'Vi tjener bare når boligen din er utleid',
    's2': 'Ingen bindingstid', 's3': 'Ingen enerett',
    'vacia': 'Står boligen tom, betaler du ingenting',
    'promesa': 'Du får boligen tilbake slik du forlot den. Går noe i stykker, reparerer eller erstatter vi det.',
    'v3.c': 'Fra Oslo', 'v3.e': 'Passet på hele vinteren',
  },
  sv: {
    'd1.t': 'Jag har ett hus', 'd1.s': 'Jag vill aktivera det och få inkomst',
    'd2.t': 'Jag söker en bostad', 'd2.s': 'Från 1 vecka till 6 månader',
    'h1': 'Vi hyr inte bara ut bostäder.<br><em>Vi aktiverar din fastighet.</em>',
    'lede': 'Se hur din bostad mår varje vecka: <b>städad, underhållen och med inkomst.</b>',
    's1': 'Vi tjänar bara när din bostad är uthyrd',
    's2': 'Ingen bindningstid', 's3': 'Ingen exklusivitet',
    'vacia': 'Står bostaden tom betalar du ingenting',
    'promesa': 'Du får tillbaka bostaden precis som du lämnade den. Går något sönder lagar eller ersätter vi det.',
    'v3.c': 'Familjen Andersson', 'v3.e': 'Omskött hela vintern',
  },
};

/* Máster ES: se captura del propio HTML al cargar, para poder volver a él. */
const _es = {};
document.querySelectorAll('[data-i]').forEach(el => { _es[el.dataset.i] = _es[el.dataset.i] || el.innerHTML; });

function aplicarIdioma(lang){
  const dic = I18N[lang] || {};
  document.querySelectorAll('[data-i]').forEach(el => {
    const k = el.dataset.i;
    el.innerHTML = (lang !== 'es' && dic[k]) ? dic[k] : _es[k];
  });
  document.documentElement.lang = lang;
  document.querySelectorAll('.idiomas button').forEach(b => {
    if (b.dataset.lang === lang) b.setAttribute('aria-current','true');
    else b.removeAttribute('aria-current');
  });
  try { localStorage.setItem('activala_lang', lang); } catch(e) {}
}

document.querySelectorAll('.idiomas button').forEach(b => {
  b.addEventListener('click', () => aplicarIdioma(b.dataset.lang));
});

/* Recuerda el idioma entre páginas */
try {
  const guardado = localStorage.getItem('activala_lang');
  if (guardado && guardado !== 'es') aplicarIdioma(guardado);
} catch(e) {}

/* Vídeos: si el archivo no existe todavía, se oculta el <video> y queda el hueco */
document.querySelectorAll('.vid video').forEach(v => {
  v.addEventListener('error', () => { v.style.display = 'none'; }, true);
});
