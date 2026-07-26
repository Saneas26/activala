// ============================================================
// Activala · Edge Function: avisar-interesado
// Avisa por correo (Resend) cuando alguien deja el formulario de la web.
// El correo de destino sale del secreto INTERESADOS_EMAIL: JAMÁS en el código.
// Desplegar como Edge Function con «Enforce JWT verification» DESACTIVADO
// (la llama el trigger interno de la base, no un cliente).
// Secretos necesarios: RESEND_API_KEY · INTERESADOS_EMAIL
// ============================================================

Deno.serve(async (req) => {
  try {
    const { record } = await req.json();
    if (!record?.email) return new Response('sin datos', { status: 400 });

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    const DESTINO = Deno.env.get('INTERESADOS_EMAIL');
    if (!RESEND_API_KEY || !DESTINO) return new Response('faltan secretos', { status: 500 });

    const esc = (s: unknown) =>
      String(s ?? '—').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const tipo = record.tipo === 'propietario' ? 'PROPIETARIO · tiene una casa' : 'INQUILINO · busca casa';
    const detalle = record.tipo === 'propietario'
      ? `<tr><td><b>Dónde está la casa</b></td><td>${esc(record.donde)}</td></tr>`
      : `<tr><td><b>Meses que quiere venir</b></td><td>${esc(record.meses)}</td></tr>`;

    const html = `
      <h2 style="font-family:sans-serif">Nuevo interesado en Activala</h2>
      <table border="0" cellpadding="6" style="font-family:sans-serif;font-size:14px">
        <tr><td><b>Tipo</b></td><td>${esc(tipo)}</td></tr>
        <tr><td><b>Nombre</b></td><td>${esc(record.nombre)}</td></tr>
        <tr><td><b>Idioma</b></td><td>${esc(record.idioma)}</td></tr>
        <tr><td><b>Email</b></td><td>${esc(record.email)}</td></tr>
        <tr><td><b>WhatsApp</b></td><td>${esc(record.whatsapp)}</td></tr>
        ${detalle}
        <tr><td><b>Mensaje</b></td><td>${esc(record.mensaje)}</td></tr>
      </table>`;

    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Activala <activala@saneas.es>', // dominio ya verificado en Resend (el plan Free solo admite 1)
        reply_to: record.email,
        to: [DESTINO],
        subject: `Activala · nuevo ${record.tipo}: ${record.nombre}`,
        html,
      }),
    });

    if (!r.ok) return new Response('resend: ' + (await r.text()), { status: 502 });
    return new Response('ok');
  } catch (e) {
    return new Response('error: ' + e, { status: 500 });
  }
});
