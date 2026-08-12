/* Páginas traducidas: el HTML ya llega en su idioma, así que aquí no se
   traduce nada. Esto solo recuerda el idioma que el visitante ha elegido,
   para que el resto de la web (y las páginas legales, que sí traducen en el
   navegador) lo respeten. Comparte la clave activala_lang con js/i18n.js. */
(function () {
  var lang = document.documentElement.lang || 'es';
  try { localStorage.setItem('activala_lang', lang); } catch (e) {}
})();
