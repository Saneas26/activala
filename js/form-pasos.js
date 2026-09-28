/* Formulario por pasos (activar y alquilar).

   Por qué: pedir ocho datos de golpe intimida y se abandona el formulario.
   Partido en tres bloques cortos, cada pantalla pide poco y se ve el avance.

   Mejora progresiva: el HTML lleva los tres bloques seguidos y el botón de
   enviar. Todo lo de los pasos (barra, contador, Atrás/Siguiente) está oculto
   por CSS y solo se enciende cuando este script añade la clase js-pasos. Si el
   script no carga, el formulario sigue funcionando entero, de una sola tirada.

   Los textos NO se generan aquí: están en el HTML con data-i, para que los
   traduzcan tanto el motor del navegador como el generador de páginas. */
(function () {
  document.querySelectorAll('form[data-pasos]').forEach(function (form) {
    var pasos = Array.prototype.slice.call(form.querySelectorAll('.fpaso'));
    if (pasos.length < 2) return;

    var barra  = form.querySelector('.fp-barra i');
    var actual = form.querySelector('.fp-i');
    var total  = form.querySelector('.fp-total');
    var atras  = form.querySelector('.fp-atras');
    var sig    = form.querySelector('.fp-sig');
    var enviar = form.querySelector('button[type="submit"]');
    if (!atras || !sig || !enviar) return;

    form.classList.add('js-pasos');
    if (total) total.textContent = pasos.length;
    var i = 0;

    function pintar() {
      pasos.forEach(function (p, n) { p.hidden = n !== i; });
      if (actual) actual.textContent = i + 1;
      if (barra) barra.style.width = ((i + 1) / pasos.length * 100) + '%';
      atras.hidden = i === 0;
      sig.hidden = i === pasos.length - 1;
      enviar.hidden = i !== pasos.length - 1;
    }

    /* Valida solo los campos del paso visible: los de más adelante aún
       están vacíos y no deben bloquear el avance. */
    function pasoValido() {
      var campos = pasos[i].querySelectorAll('input, select, textarea');
      for (var k = 0; k < campos.length; k++) {
        if (!campos[k].checkValidity()) {
          campos[k].reportValidity();
          return false;
        }
      }
      return true;
    }

    function ir(destino) {
      i = Math.max(0, Math.min(destino, pasos.length - 1));
      pintar();
      var caja = form.getBoundingClientRect();
      if (caja.top < 0) form.scrollIntoView({ block: 'start', behavior: 'smooth' });
      var primero = pasos[i].querySelector('input, select, textarea');
      if (primero) primero.focus({ preventScroll: true });
    }

    sig.addEventListener('click', function () { if (pasoValido()) ir(i + 1); });
    atras.addEventListener('click', function () { ir(i - 1); });

    /* Enter avanza en vez de enviar un formulario a medio rellenar. */
    form.addEventListener('keydown', function (ev) {
      if (ev.key === 'Enter' && ev.target.tagName !== 'TEXTAREA' && i < pasos.length - 1) {
        ev.preventDefault();
        sig.click();
      }
    });

    /* Enviado con éxito, la página hace reset: volvemos al primer paso. */
    form.addEventListener('reset', function () {
      setTimeout(function () { ir(0); }, 0);
    });

    pintar();
  });
})();
