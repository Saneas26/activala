/* Buscador del centro de ayuda.

   Filtra las preguntas mientras escribes y resalta lo que coincide. Todo
   pasa en el navegador: no hay servidor detrás ni se envía a ningún sitio
   lo que la gente teclea aquí.

   Mejora progresiva: sin este script el buscador no filtra, pero las
   preguntas siguen todas visibles y plegables. Nada se pierde. */
(function () {
  var caja = document.getElementById('qbuscar');
  var zona = document.getElementById('grupos');
  var nada = document.getElementById('sinNada');
  if (!caja || !zona) return;

  var faqs = Array.prototype.slice.call(zona.querySelectorAll('.faq'));
  var grupos = Array.prototype.slice.call(zona.querySelectorAll('.grupo'));

  /* Guardamos el HTML original de cada pregunta: al resaltar lo reescribimos,
     y sin esta copia se irían acumulando las marcas de búsquedas anteriores. */
  function guardar() {
    faqs.forEach(function (f) {
      var s = f.querySelector('summary'), r = f.querySelector('.resp');
      f._s = s.innerHTML;
      f._r = r.innerHTML;
      f._txt = (s.textContent + ' ' + r.textContent).toLowerCase();
    });
  }
  guardar();

  /* Sin acentos y en minúsculas: quien busca "mascota" encuentra "mascotas",
     y quien escribe "impuesto" encuentra "impuestos" sin pelearse con tildes. */
  function plano(s) {
    return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function resaltar(html, palabras) {
    /* Partimos en etiquetas y texto, y solo tocamos el texto: así no se
       rompe el HTML ni se marca nada dentro de un <a href="…">. */
    return html.split(/(<[^>]+>)/).map(function (trozo) {
      if (trozo.charAt(0) === '<') return trozo;
      var salida = trozo;
      palabras.forEach(function (p) {
        if (p.length < 2) return;
        var re = new RegExp('(' + p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
        salida = salida.replace(re, '<mark>$1</mark>');
      });
      return salida;
    }).join('');
  }

  function filtrar() {
    var q = plano(caja.value.trim());
    var palabras = q.split(/\s+/).filter(Boolean);

    faqs.forEach(function (f) {
      var s = f.querySelector('summary'), r = f.querySelector('.resp');
      if (!q) {
        f.hidden = false;
        f.open = false;
        s.innerHTML = f._s;
        r.innerHTML = f._r;
        return;
      }
      var casa = palabras.every(function (p) { return plano(f._txt).indexOf(p) !== -1; });
      f.hidden = !casa;
      if (casa) {
        s.innerHTML = resaltar(f._s, palabras);
        r.innerHTML = resaltar(f._r, palabras);
        f.open = true;               // con búsqueda, la respuesta ya se ve
      }
    });

    /* Un grupo entero sin resultados se oculta con su título */
    grupos.forEach(function (g) {
      var vivas = g.querySelectorAll('.faq:not([hidden])').length;
      g.hidden = vivas === 0;
    });

    if (nada) nada.style.display = zona.querySelectorAll('.faq:not([hidden])').length ? 'none' : 'block';
  }

  caja.addEventListener('input', filtrar);
  caja.addEventListener('search', filtrar);   // la X de limpiar en Safari

  /* Al cambiar de idioma el texto es otro: hay que rehacer la copia. */
  window.__alCambiarIdioma = function () {
    caja.value = '';
    faqs.forEach(function (f) { f.hidden = false; f.open = false; });
    grupos.forEach(function (g) { g.hidden = false; });
    if (nada) nada.style.display = 'none';
    guardar();
  };
})();
