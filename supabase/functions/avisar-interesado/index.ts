// ============================================================
// Activala · Edge Function: avisar-interesado
// Hace dos cosas cuando alguien deja el formulario de la web:
//   1) avisa a Óscar (correo de destino en el secreto INTERESADOS_EMAIL,
//      JAMÁS en el código) con los datos del interesado;
//   2) manda al interesado un acuse de recibo EN SU IDIOMA.
// El aviso a Óscar es lo crítico: si el acuse falla, se registra y ya,
// pero la función NO devuelve error para que el formulario no se rompa.
// Desplegar con «Enforce JWT verification» DESACTIVADO (la llama el
// trigger interno de la base, no un cliente).
// Secretos necesarios: RESEND_API_KEY · INTERESADOS_EMAIL
// Los textos salen de i18n/acuse-recibo.json del repo: si se tocan allí,
// hay que volver a generar este fichero y desplegarlo.
// ============================================================

const ACUSE = {
  "es": {
    "asunto_prop": "Recibido. Te escribimos por WhatsApp · Activala",
    "asunto_inq": "Recibido. Te mandamos casas por WhatsApp · Activala",
    "saludo": "Hola {nombre},",
    "recibido_prop": "Hemos recibido tu solicitud para activar tu casa en el sur de Gran Canaria. Vamos a mirar la zona, la licencia y qué contrato admite, y te lo contamos por escrito; nuestra cuota es desde 300 € al mes y solo cuando la casa está alquilada.",
    "recibido_inq": "Hemos recibido tu búsqueda de casa en el sur de Gran Canaria. Vamos a ver qué hay libre en tus meses, con el precio total cerrado y sin comisión de agencia.",
    "cuando": "Te contestamos por escrito, por WhatsApp y en tu idioma, normalmente el mismo día. Detrás hay una persona, no una máquina.",
    "mientras": "Mientras tanto, si quieres añadir algo —fotos, fechas o un detalle que se te haya quedado fuera del formulario—, escríbenos por WhatsApp cuando quieras.",
    "auto": "Este correo es automático y solo te dice que tu mensaje ha llegado bien. No hace falta que lo respondas: la respuesta de verdad te la escribe una persona, por WhatsApp.",
    "firma": "Activala · El alquiler activo del sur de Gran Canaria"
  },
  "de": {
    "asunto_prop": "Angekommen. Wir schreiben Ihnen per WhatsApp · Activala",
    "asunto_inq": "Angekommen. Wir schicken Ihnen Häuser per WhatsApp · Activala",
    "saludo": "Hallo {nombre},",
    "recibido_prop": "Ihre Anfrage, Ihr Haus im Süden von Gran Canaria zu aktivieren, ist bei uns angekommen. Wir sehen uns Gegend, Lizenz und möglichen Vertrag an und schreiben Ihnen, was dabei herauskommt; unser Abonnement beginnt bei 300 € im Monat, und nur wenn das Haus vermietet ist.",
    "recibido_inq": "Ihre Suche nach einem Haus im Süden von Gran Canaria ist bei uns angekommen. Wir schauen, was in Ihren Monaten frei ist, mit festem Gesamtpreis und ohne Agenturprovision.",
    "cuando": "Wir antworten schriftlich, per WhatsApp und in Ihrer Sprache, in der Regel noch am selben Tag. Dahinter steht ein Mensch, keine Maschine.",
    "mientras": "Wenn Sie in der Zwischenzeit noch etwas ergänzen möchten — Fotos, Termine oder eine Kleinigkeit, die im Formular gefehlt hat —, schreiben Sie uns einfach per WhatsApp.",
    "auto": "Diese E-Mail ist automatisch und sagt Ihnen nur, dass Ihre Nachricht gut angekommen ist. Sie müssen darauf nicht antworten: die richtige Antwort schreibt Ihnen ein Mensch, per WhatsApp.",
    "firma": "Activala · Aktiv vermieten im Süden von Gran Canaria"
  },
  "en": {
    "asunto_prop": "Received. We'll message you on WhatsApp · Activala",
    "asunto_inq": "Received. We'll send you homes on WhatsApp · Activala",
    "saludo": "Hello {nombre},",
    "recibido_prop": "We've received your request to put your home in the south of Gran Canaria to work. We'll look at the area, the licence and which contract it allows, and write back with what we find; our subscription starts at €300 a month, and only when the home is let.",
    "recibido_inq": "We've received your search for a home in the south of Gran Canaria. We'll look at what's free in your months, with the total price fixed and no agency fee.",
    "cuando": "We reply in writing, on WhatsApp and in your language, usually the same day. There's a person behind it, not a machine.",
    "mientras": "In the meantime, if you'd like to add anything — photos, dates or something you left out of the form — just message us on WhatsApp.",
    "auto": "This email is automatic and only tells you your message arrived safely. There's no need to reply to it: the real answer comes from a person, on WhatsApp.",
    "firma": "Activala · Active letting in the south of Gran Canaria"
  },
  "no": {
    "asunto_prop": "Mottatt. Vi skriver til deg på WhatsApp · Activala",
    "asunto_inq": "Mottatt. Vi sender deg boliger på WhatsApp · Activala",
    "saludo": "Hei {nombre},",
    "recibido_prop": "Vi har mottatt forespørselen din om å aktivere boligen din sør på Gran Canaria. Vi ser på området, lisensen og hvilken kontrakt den kan leies ut med, og skriver til deg om det vi finner; abonnementet vårt starter på 300 € i måneden, og bare når boligen er utleid.",
    "recibido_inq": "Vi har mottatt boligsøket ditt sør på Gran Canaria. Vi ser hva som er ledig i månedene dine, med fast totalpris og uten byrågebyr.",
    "cuando": "Vi svarer skriftlig, på WhatsApp og på ditt språk, som regel samme dag. Det er et menneske som svarer, ikke en maskin.",
    "mientras": "Vil du legge til noe i mellomtiden — bilder, datoer eller noe du glemte i skjemaet — er det bare å skrive til oss på WhatsApp.",
    "auto": "Denne e-posten er automatisk og sier bare fra at meldingen din kom fram. Du trenger ikke svare på den: det ordentlige svaret får du fra et menneske, på WhatsApp.",
    "firma": "Activala · Aktiv utleie sør på Gran Canaria"
  },
  "sv": {
    "asunto_prop": "Mottaget. Vi skriver till dig på WhatsApp · Activala",
    "asunto_inq": "Mottaget. Vi skickar bostäder till dig på WhatsApp · Activala",
    "saludo": "Hej {nombre},",
    "recibido_prop": "Vi har tagit emot din förfrågan om att aktivera din bostad på södra Gran Canaria. Vi tittar på området, licensen och vilket kontrakt den tillåter och skriver till dig om det vi hittar; vårt abonnemang börjar på 300 € i månaden, och bara när bostaden är uthyrd.",
    "recibido_inq": "Vi har tagit emot din bostadssökning på södra Gran Canaria. Vi tittar på vad som är ledigt under dina månader, med fast totalpris och utan förmedlingsavgift.",
    "cuando": "Vi svarar skriftligt, på WhatsApp och på ditt språk, oftast samma dag. Det är en människa som svarar, ingen maskin.",
    "mientras": "Vill du lägga till något under tiden — foton, datum eller något du glömde i formuläret — är det bara att skriva till oss på WhatsApp.",
    "auto": "Det här mejlet är automatiskt och säger bara att ditt meddelande kom fram. Du behöver inte svara på det: det riktiga svaret får du från en människa, på WhatsApp.",
    "firma": "Activala · Aktiv uthyrning på södra Gran Canaria"
  }
} as Record<string, Record<string, string>>;

const REMITENTE = 'Activala <activala@saneas.es>'; // único dominio verificado en Resend

async function enviar(apiKey: string, cuerpo: unknown) {
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(cuerpo),
  });
  return { ok: r.ok, detalle: r.ok ? '' : await r.text() };
}

Deno.serve(async (req) => {
  try {
    const { record } = await req.json();
    if (!record?.email) return new Response('sin datos', { status: 400 });

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    const DESTINO = Deno.env.get('INTERESADOS_EMAIL');
    if (!RESEND_API_KEY || !DESTINO) return new Response('faltan secretos', { status: 500 });

    const esc = (s: unknown) =>
      String(s ?? '—').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const esProp = record.tipo === 'propietario';

    // ---------- 1 · aviso a Óscar ----------
    const tipo = esProp ? 'PROPIETARIO · tiene una casa' : 'INQUILINO · busca casa';
    const detalle = esProp
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

    const aviso = await enviar(RESEND_API_KEY, {
      from: REMITENTE,
      reply_to: record.email,
      to: [DESTINO],
      subject: `Activala · nuevo ${record.tipo}: ${record.nombre}`,
      html,
    });
    if (!aviso.ok) return new Response('resend (aviso): ' + aviso.detalle, { status: 502 });

    // ---------- 2 · acuse de recibo al interesado ----------
    const t = ACUSE[record.idioma] ?? ACUSE.es;
    const saludo = t.saludo.replace('{nombre}', esc(record.nombre));
    const p = (txt: string) =>
      `<p style="margin:0 0 16px">${esc(txt)}</p>`;

    const htmlAcuse = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:16px;line-height:1.6;color:#0E1F2B;max-width:34rem">
        <p style="margin:0 0 16px"><b>${saludo}</b></p>
        ${p(esProp ? t.recibido_prop : t.recibido_inq)}
        ${p(t.cuando)}
        ${p(t.mientras)}
        <p style="margin:24px 0 0;padding-top:16px;border-top:1px solid #E1E8ED;font-size:14px;color:#55646E">
          ${esc(t.auto)}<br><br><b style="color:#082C48">${esc(t.firma)}</b>
        </p>
      </div>`;

    const acuse = await enviar(RESEND_API_KEY, {
      from: REMITENTE,
      reply_to: DESTINO,   // si contesta al acuse, le llega a Óscar
      to: [record.email],
      subject: esProp ? t.asunto_prop : t.asunto_inq,
      html: htmlAcuse,
    });
    if (!acuse.ok) console.error('resend (acuse):', acuse.detalle); // no rompe el flujo

    return new Response(acuse.ok ? 'ok' : 'ok (acuse fallido)');
  } catch (e) {
    return new Response('error: ' + e, { status: 500 });
  }
});
