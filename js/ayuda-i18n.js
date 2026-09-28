/* Motor i18n de las página de ayuda (/ayuda).
   Va aparte de js/i18n.js a propósito: estas claves solo las carga /ayuda, no la portada
   ni las landings.
   NO EDITAR A MANO: se genera desde i18n/ayuda-*.json con
   i18n/generar-ayuda-i18n.py. Mismo mecanismo que js/i18n.js
   (data-i innerHTML, data-i-ph placeholder) más data-i-content
   para el content de <meta name="description"> y el <title>. */
const I18N = {
 es: {
  "ay.title": "Centro de ayuda — Activala®",
  "ay.meta": "Respuestas a las dudas más frecuentes sobre Activala: qué cuesta, quién entra en tu casa, qué se paga y cómo se declara.",
  "ay.h1": "¿En qué podemos ayudarte?",
  "ay.sub": "Las preguntas que más nos hacen, respondidas sin rodeos. Si no encuentras la tuya, escríbenos por WhatsApp y te contestamos en tu idioma.",
  "ay.buscar": "Busca tu duda: precio, impuestos, mascotas…",
  "ay.nada": "No hay ninguna pregunta con esas palabras. Pregúntanos directamente por WhatsApp y te respondemos.",
  "ay.g1": "Si tienes una casa",
  "ay.g1.q1": "¿Cuánto cuesta y cuándo se paga?",
  "ay.g1.a1": "Desde 300 € al mes, y <b>solo los meses en que tu casa está alquilada</b>. Con la casa vacía no pagas nada: si un mes no entra nadie, ese mes no hay cuota. El precio exacto de tu caso te lo damos por escrito antes de que decidas nada.",
  "ay.g1.q2": "¿Tengo que cederos la casa todo el año?",
  "ay.g1.a2": "No. Tú marcas los meses que no la usas y esos son los que activamos. Los demás siguen siendo tuyos y nadie los toca: ni nosotros entramos ni te pedimos explicaciones.",
  "ay.g1.q3": "¿Quién entra en mi casa?",
  "ay.g1.a3": "Gente identificada y verificada, con la que hemos hablado antes por escrito. Buscamos estancias largas de personas del norte de Europa que vienen a pasar el invierno, no fiestas de fin de semana. Si alguien no nos encaja, no entra.",
  "ay.g1.q4": "¿Y si algo se rompe?",
  "ay.g1.a4": "Lo arreglamos nosotros y te lo contamos. El mantenimiento corriente va incluido: bombillas, grifos, electrodomésticos del día a día. Si aparece algo grande, te lo consultamos antes de tocar nada.",
  "ay.g1.q5": "¿Me atáis con un contrato largo?",
  "ay.g1.a5": "No hay exclusividad ni permanencia. Si un mes quieres tu casa para ti, la tienes. Si quieres dejarlo, lo dejas. Preferimos que sigas porque te compensa, no porque hayas firmado algo.",
  "ay.g1.q6": "¿Cómo sé cómo está mi casa si vivo fuera?",
  "ay.g1.a6": "Te mandamos un vídeo y un parte cada semana. No tienes que preguntar ni perseguirnos: llega solo, aunque no haya pasado nada digno de contar.",
  "ay.g2": "Si buscas casa",
  "ay.g2.q1": "¿Necesito saber las fechas exactas?",
  "ay.g2.a1": "No. Dinos los meses que te interesan y te enseñamos lo que hay libre. Las fechas se cierran después, cuando ya sepas cuál te gusta.",
  "ay.g2.q2": "¿Qué pago y cuándo?",
  "ay.g2.a2": "Una señal al firmar el contrato y el resto al llegar. Nada más: <b>ni comisión de agencia, ni limpieza aparte, ni suplementos escondidos</b>. El precio que ves es el que pagas.",
  "ay.g2.q3": "¿Y la fianza?",
  "ay.g2.a3": "Solo la que marca la ley, y vuelve entera al salir si la casa queda como la encontraste. Está escrita en el contrato, en tu idioma.",
  "ay.g2.q4": "¿Puedo venir con mi perro?",
  "ay.g2.a4": "Depende de cada casa: lo decide su propietario. Dínoslo al escribirnos y te enseñamos solo las que lo admiten, para que no te ilusiones con una que no puede ser.",
  "ay.g2.q5": "¿Y si algo se estropea durante mi estancia?",
  "ay.g2.a5": "Nos escribes por WhatsApp y lo arreglamos nosotros. Está incluido en lo que pagas: no te vamos a pasar una factura por una avería que no has provocado tú.",
  "ay.g3": "Dinero, papeles e idiomas",
  "ay.g3.q1": "¿Esto se declara?",
  "ay.g3.a1": "Sí, y es justo la idea. Contrato en regla, alquiler declarado y tú durmiendo tranquilo. No trabajamos de otra manera.",
  "ay.g3.q2": "¿Cuánto voy a pagar de impuestos?",
  "ay.g3.a2": "Depende de tu caso, y por eso no ponemos cifras en esta web. Te hacemos el número de tu situación por escrito y gratis, para que lo veas antes de decidir. <b>El cálculo definitivo, siempre con tu asesor</b>, que es quien tiene todos tus datos delante.",
  "ay.g3.q3": "¿Me vais a pedir datos bancarios por la web?",
  "ay.g3.a3": "Nunca. En esta web solo te pedimos nombre, idioma, email y WhatsApp. Ni documentos de identidad ni cuentas: eso llega mucho después y solo si decides seguir adelante.",
  "ay.g3.q4": "¿En qué idiomas atendéis?",
  "ay.g3.a4": "Español, alemán, inglés, noruego y sueco. La atención es <b>por escrito</b>, normalmente por WhatsApp: así traducimos con calma y te contestamos bien, en vez de mal y deprisa por teléfono.",
  "ay.g3.q5": "¿En qué zona trabajáis?",
  "ay.g3.a5": "En el sur de Gran Canaria: San Bartolomé de Tirajana y Mogán. Si tu casa está en otro sitio, dínoslo igualmente y te decimos con franqueza si podemos ayudarte o no.",
  "ay.cta.h": "¿No está tu pregunta aquí?",
  "ay.cta.p": "Escríbenos y te contestamos en tu idioma, normalmente el mismo día. Sin compromiso y sin que nadie te llame por teléfono.",
  "ay.cta.btn": "Preguntar por WhatsApp",
  "ay.nav.priv": "Privacidad",
  "ay.nav.aviso": "Aviso legal",
  "ay.nav.ck": "Cookies",
  "ay.nav.ayuda": "Ayuda"
 },
 de: {
  "ay.title": "Hilfebereich — Activala®",
  "ay.meta": "Antworten auf die häufigsten Fragen zu Activala: was es kostet, wer in Ihr Haus kommt, was gezahlt wird und wie es beim Finanzamt angemeldet wird.",
  "ay.h1": "Womit können wir Ihnen helfen?",
  "ay.sub": "Die Fragen, die uns am häufigsten gestellt werden, ohne Umschweife beantwortet. Ist Ihre nicht dabei, schreiben Sie uns per WhatsApp, und wir antworten in Ihrer Sprache.",
  "ay.buscar": "Suchen Sie Ihre Frage: Preis, Steuern, Haustiere…",
  "ay.nada": "Zu diesen Wörtern gibt es keine Frage. Fragen Sie uns direkt per WhatsApp, wir antworten Ihnen.",
  "ay.g1": "Wenn Sie ein Haus haben",
  "ay.g1.q1": "Was kostet es, und wann wird gezahlt?",
  "ay.g1.a1": "Ab 300 € im Monat, und <b>nur in den Monaten, in denen Ihr Haus vermietet ist</b>. Steht das Haus leer, zahlen Sie nichts: Kommt in einem Monat niemand, gibt es in diesem Monat keine Gebühr. Den genauen Preis für Ihren Fall nennen wir Ihnen schriftlich, bevor Sie irgendetwas entscheiden.",
  "ay.g1.q2": "Muss ich Ihnen das Haus das ganze Jahr überlassen?",
  "ay.g1.a2": "Nein. Sie markieren die Monate, in denen Sie es nicht nutzen, und genau die aktivieren wir. Die übrigen bleiben Ihre, und niemand rührt sie an: Wir gehen nicht hinein und verlangen keine Erklärungen.",
  "ay.g1.q3": "Wer kommt in mein Haus?",
  "ay.g1.a3": "Identifizierte und geprüfte Menschen, mit denen wir vorher schriftlich gesprochen haben. Wir suchen lange Aufenthalte von Menschen aus Nordeuropa, die hier den Winter verbringen, keine Wochenendpartys. Wer nicht zu uns passt, kommt nicht hinein.",
  "ay.g1.q4": "Und wenn etwas kaputtgeht?",
  "ay.g1.a4": "Wir reparieren es und sagen Ihnen Bescheid. Die laufende Instandhaltung ist inbegriffen: Glühbirnen, Wasserhähne, Haushaltsgeräte des Alltags. Kommt etwas Größeres, fragen wir Sie, bevor wir etwas anfassen.",
  "ay.g1.q5": "Binden Sie mich mit einem langen Vertrag?",
  "ay.g1.a5": "Es gibt keine Exklusivität und keine Mindestlaufzeit. Wollen Sie Ihr Haus in einem Monat für sich, gehört es Ihnen. Wollen Sie aufhören, hören Sie auf. Uns ist lieber, Sie bleiben, weil es sich für Sie lohnt, und nicht, weil Sie etwas unterschrieben haben.",
  "ay.g1.q6": "Wie erfahre ich, wie mein Haus dasteht, wenn ich weit weg wohne?",
  "ay.g1.a6": "Wir schicken Ihnen jede Woche ein Video und einen Bericht. Sie müssen nicht nachfragen und uns nicht hinterherlaufen: Es kommt von allein, auch wenn nichts Erwähnenswertes passiert ist.",
  "ay.g2": "Wenn Sie ein Haus suchen",
  "ay.g2.q1": "Muss ich die genauen Daten kennen?",
  "ay.g2.a1": "Nein. Nennen Sie uns die Monate, die Sie interessieren, und wir zeigen Ihnen, was frei ist. Die Daten werden später festgelegt, wenn Sie wissen, welches Haus Ihnen gefällt.",
  "ay.g2.q2": "Was zahle ich und wann?",
  "ay.g2.a2": "Eine Anzahlung bei Vertragsunterschrift und den Rest bei Ankunft. Sonst nichts: <b>keine Agenturprovision, keine separate Reinigung, keine versteckten Zuschläge</b>. Der Preis, den Sie sehen, ist der Preis, den Sie zahlen.",
  "ay.g2.q3": "Und die Kaution?",
  "ay.g2.a3": "Nur die gesetzlich vorgesehene, und Sie bekommen sie beim Auszug vollständig zurück, wenn das Haus so bleibt, wie Sie es vorgefunden haben. Sie steht im Vertrag, in Ihrer Sprache.",
  "ay.g2.q4": "Kann ich meinen Hund mitbringen?",
  "ay.g2.a4": "Das hängt vom Haus ab: Das entscheidet der Eigentümer. Sagen Sie es uns, wenn Sie uns schreiben, und wir zeigen Ihnen nur die Häuser, die Haustiere zulassen — damit Sie sich nicht auf eines freuen, das nicht geht.",
  "ay.g2.q5": "Und wenn während meines Aufenthalts etwas kaputtgeht?",
  "ay.g2.a5": "Sie schreiben uns per WhatsApp, und wir reparieren es. Das ist in dem enthalten, was Sie zahlen: Für einen Defekt, den Sie nicht verursacht haben, stellen wir Ihnen keine Rechnung.",
  "ay.g3": "Geld, Papiere und Sprachen",
  "ay.g3.q1": "Wird das beim Finanzamt angemeldet?",
  "ay.g3.a1": "Ja, und genau das ist die Idee. Ordentlicher Vertrag, die Miete angemeldet, und Sie schlafen ruhig. Anders arbeiten wir nicht.",
  "ay.g3.q2": "Wie viel Steuern werde ich zahlen?",
  "ay.g3.a2": "Das hängt von Ihrem Fall ab, und deshalb nennen wir auf dieser Website keine Zahlen. Wir rechnen Ihnen Ihre Situation schriftlich und kostenlos durch, damit Sie es sehen, bevor Sie entscheiden. <b>Die endgültige Berechnung immer mit Ihrem Steuerberater</b>, der alle Ihre Daten vor sich hat.",
  "ay.g3.q3": "Fragen Sie mich über die Website nach Bankdaten?",
  "ay.g3.a3": "Nie. Auf dieser Website fragen wir nur nach Name, Sprache, E-Mail und WhatsApp. Weder Ausweisdokumente noch Konten: Das kommt viel später, und nur wenn Sie sich entscheiden weiterzumachen.",
  "ay.g3.q4": "In welchen Sprachen betreuen Sie mich?",
  "ay.g3.a4": "Spanisch, Deutsch, Englisch, Norwegisch und Schwedisch. Die Betreuung läuft <b>schriftlich</b>, in der Regel per WhatsApp: So übersetzen wir in Ruhe und antworten Ihnen gut, statt schlecht und in Eile am Telefon.",
  "ay.g3.q5": "In welcher Gegend arbeiten Sie?",
  "ay.g3.a5": "Im Süden von Gran Canaria: San Bartolomé de Tirajana und Mogán. Liegt Ihr Haus woanders, sagen Sie es uns trotzdem, und wir sagen Ihnen offen, ob wir Ihnen helfen können oder nicht.",
  "ay.cta.h": "Ist Ihre Frage nicht dabei?",
  "ay.cta.p": "Schreiben Sie uns, und wir antworten in Ihrer Sprache, in der Regel noch am selben Tag. Unverbindlich, und niemand ruft Sie an.",
  "ay.cta.btn": "Per WhatsApp fragen",
  "ay.nav.priv": "Datenschutz",
  "ay.nav.aviso": "Rechtliche Hinweise",
  "ay.nav.ck": "Cookies",
  "ay.nav.ayuda": "Hilfe"
 },
 en: {
  "ay.title": "Help centre — Activala®",
  "ay.meta": "Answers to the most common questions about Activala: what it costs, who goes into your home, what gets paid and how it's declared.",
  "ay.h1": "How can we help?",
  "ay.sub": "The questions we get asked most, answered straight. If yours isn't here, message us on WhatsApp and we'll reply in your language.",
  "ay.buscar": "Search: price, tax, pets…",
  "ay.nada": "No questions match those words. Ask us directly on WhatsApp and we'll answer.",
  "ay.g1": "If you own a home",
  "ay.g1.q1": "What does it cost, and when do I pay?",
  "ay.g1.a1": "From €300 a month, and <b>only in the months your home is let</b>. With the home empty you pay nothing: if nobody comes one month, there's no fee that month. We give you the exact price for your case in writing before you decide anything.",
  "ay.g1.q2": "Do I have to hand you the home all year?",
  "ay.g1.a2": "No. You mark the months you don't use it and those are the ones we switch on. The rest stay yours and nobody touches them: we don't go in and we don't ask you why.",
  "ay.g1.q3": "Who goes into my home?",
  "ay.g1.a3": "People who are identified and vetted, and who we've spoken to in writing first. We look for long stays by people from northern Europe coming to spend the winter, not weekend parties. If someone doesn't fit, they don't get in.",
  "ay.g1.q4": "What if something breaks?",
  "ay.g1.a4": "We repair it and we tell you. Everyday maintenance is included: light bulbs, taps, day-to-day appliances. If something big comes up, we ask you before touching anything.",
  "ay.g1.q5": "Are you tying me into a long contract?",
  "ay.g1.a5": "There's no exclusivity and no lock-in. If you want your home for yourself one month, it's yours. If you want to stop, you stop. We'd rather you stayed because it pays off, not because you signed something.",
  "ay.g1.q6": "How do I know how my home is doing if I live abroad?",
  "ay.g1.a6": "We send you a video and a report every week. You don't have to ask or chase us: it arrives on its own, even when there's nothing worth reporting.",
  "ay.g2": "If you're looking for a home",
  "ay.g2.q1": "Do I need to know my exact dates?",
  "ay.g2.a1": "No. Tell us the months you're interested in and we'll show you what's free. Dates are settled later, once you know which home you like.",
  "ay.g2.q2": "What do I pay, and when?",
  "ay.g2.a2": "A booking payment when you sign the contract, and the rest on arrival. Nothing else: <b>no agency fee, no separate cleaning charge, no hidden extras</b>. The price you see is the price you pay.",
  "ay.g2.q3": "What about the deposit?",
  "ay.g2.a3": "Only what the law sets, and it comes back in full when you leave, provided the home is as you found it. It's written in the contract, in your language.",
  "ay.g2.q4": "Can I bring my dog?",
  "ay.g2.a4": "It depends on the home: each owner decides. Tell us when you write to us and we'll only show you the ones that welcome pets, so you don't set your heart on one that can't work.",
  "ay.g2.q5": "What if something breaks during my stay?",
  "ay.g2.a5": "You message us on WhatsApp and we fix it. It's included in what you pay: we're not going to send you a bill for a fault you didn't cause.",
  "ay.g3": "Money, paperwork and languages",
  "ay.g3.q1": "Is this declared for tax?",
  "ay.g3.a1": "Yes, and that's the whole point. Contract in order, rent declared and you sleeping easy. We don't work any other way.",
  "ay.g3.q2": "How much tax am I going to pay?",
  "ay.g3.a2": "It depends on your case, and that's why we don't put figures on this website. We work out the numbers for your situation in writing and free of charge, so you can see them before deciding. <b>The final calculation, always with your tax advisor</b>, who has all your figures in front of them.",
  "ay.g3.q3": "Will you ask me for bank details on the website?",
  "ay.g3.a3": "Never. On this website we only ask for your name, language, email and WhatsApp. No ID documents and no accounts: that comes much later, and only if you decide to go ahead.",
  "ay.g3.q4": "Which languages do you help in?",
  "ay.g3.a4": "Spanish, German, English, Norwegian and Swedish. We help <b>in writing</b>, usually on WhatsApp: that way we translate calmly and answer you properly, instead of badly and in a rush over the phone.",
  "ay.g3.q5": "Which area do you work in?",
  "ay.g3.a5": "The south of Gran Canaria: San Bartolomé de Tirajana and Mogán. If your home is somewhere else, tell us anyway and we'll say honestly whether we can help or not.",
  "ay.cta.h": "Can't find your question?",
  "ay.cta.p": "Message us and we'll reply in your language, usually the same day. No obligation, and nobody will ring you.",
  "ay.cta.btn": "Ask on WhatsApp",
  "ay.nav.priv": "Privacy",
  "ay.nav.aviso": "Legal notice",
  "ay.nav.ck": "Cookies",
  "ay.nav.ayuda": "Help"
 },
 no: {
  "ay.title": "Hjelpesenter — Activala®",
  "ay.meta": "Svar på de vanligste spørsmålene om Activala: hva det koster, hvem som kommer inn i boligen din, hva som betales og hvordan det oppgis til skatt.",
  "ay.h1": "Hva kan vi hjelpe deg med?",
  "ay.sub": "Spørsmålene vi får oftest, besvart rett fram. Finner du ikke ditt, skriv til oss på WhatsApp, så svarer vi på ditt språk.",
  "ay.buscar": "Søk: pris, skatt, kjæledyr …",
  "ay.nada": "Ingen spørsmål inneholder de ordene. Spør oss direkte på WhatsApp, så svarer vi.",
  "ay.g1": "Hvis du har et hus",
  "ay.g1.q1": "Hva koster det, og når betaler jeg?",
  "ay.g1.a1": "Fra 300 € i måneden, og <b>bare de månedene boligen din er utleid</b>. Står boligen tom, betaler du ingenting: kommer det ingen en måned, er det ingenting å betale den måneden. Nøyaktig pris for din bolig får du skriftlig før du bestemmer deg for noe.",
  "ay.g1.q2": "Må jeg gi fra meg boligen hele året?",
  "ay.g1.a2": "Nei. Du merker av månedene du ikke bruker den, og det er dem vi aktiverer. Resten er fortsatt dine, og ingen rører dem: vi går ikke inn, og vi ber ikke om forklaringer.",
  "ay.g1.q3": "Hvem kommer inn i boligen min?",
  "ay.g1.a3": "Identifiserte og kontrollerte folk som vi har snakket skriftlig med på forhånd. Vi ser etter lange opphold, folk fra Nord-Europa som kommer for å overvintre, ikke helgefester. Passer noen ikke, kommer de ikke inn.",
  "ay.g1.q4": "Og hvis noe går i stykker?",
  "ay.g1.a4": "Vi ordner det, og vi forteller deg om det. Vanlig vedlikehold er inkludert: lyspærer, kraner og hverdagens hvitevarer. Dukker det opp noe stort, spør vi deg før vi rører noe.",
  "ay.g1.q5": "Binder dere meg til en lang kontrakt?",
  "ay.g1.a5": "Ingen enerett og ingen bindingstid. Vil du ha boligen selv en måned, får du den. Vil du slutte, slutter du. Vi vil heller at du fortsetter fordi det lønner seg, enn fordi du har signert noe.",
  "ay.g1.q6": "Hvordan vet jeg hvordan boligen har det når jeg bor i utlandet?",
  "ay.g1.a6": "Vi sender deg video og rapport hver uke. Du trenger ikke spørre eller mase: det kommer av seg selv, også når det ikke har skjedd noe verdt å fortelle.",
  "ay.g2": "Hvis du leter etter bolig",
  "ay.g2.q1": "Må jeg vite eksakte datoer?",
  "ay.g2.a1": "Nei. Fortell oss hvilke måneder du er interessert i, så viser vi deg det som er ledig. Datoene fastsettes etterpå, når du vet hvilken bolig du liker.",
  "ay.g2.q2": "Hva betaler jeg, og når?",
  "ay.g2.a2": "Et forskudd når kontrakten signeres, og resten ved ankomst. Ikke noe mer: <b>ingen byrågebyr, ingen egen rengjøringsavgift og ingen skjulte tillegg</b>. Prisen du ser, er den du betaler.",
  "ay.g2.q3": "Hva med depositumet?",
  "ay.g2.a3": "Bare det loven krever, og du får alt tilbake ved avreise hvis boligen er som da du kom. Det står i kontrakten, på ditt språk.",
  "ay.g2.q4": "Kan jeg ta med hunden min?",
  "ay.g2.a4": "Det avhenger av boligen: eieren bestemmer. Si fra når du skriver til oss, så viser vi deg bare de boligene som tillater det, slik at du ikke blir glad i en som ikke går.",
  "ay.g2.q5": "Hva om noe går i stykker under oppholdet?",
  "ay.g2.a5": "Du skriver til oss på WhatsApp, så ordner vi det. Det er inkludert i det du betaler: vi sender deg ingen regning for en feil du ikke har forårsaket.",
  "ay.g3": "Penger, papirer og språk",
  "ay.g3.q1": "Blir dette oppgitt til skattemyndighetene?",
  "ay.g3.a1": "Ja, og det er hele poenget. Kontrakt i orden, leieinntekten oppgitt, og du sover godt om natten. Vi jobber ikke på noen annen måte.",
  "ay.g3.q2": "Hvor mye skatt kommer jeg til å betale?",
  "ay.g3.a2": "Det avhenger av din situasjon, og derfor setter vi ingen tall på denne nettsiden. Vi regner på ditt tilfelle skriftlig og gratis, så du ser det før du bestemmer deg. <b>Det endelige regnestykket tar du alltid med rådgiveren din</b>, som har alle tallene dine foran seg.",
  "ay.g3.q3": "Kommer dere til å be om bankopplysninger på nettsiden?",
  "ay.g3.a3": "Aldri. På denne nettsiden ber vi bare om navn, språk, e-post og WhatsApp. Verken legitimasjon eller kontonumre: det kommer mye senere, og bare hvis du bestemmer deg for å gå videre.",
  "ay.g3.q4": "Hvilke språk svarer dere på?",
  "ay.g3.a4": "Spansk, tysk, engelsk, norsk og svensk. Vi svarer <b>skriftlig</b>, som regel på WhatsApp: da oversetter vi i ro og mak og svarer deg ordentlig, i stedet for dårlig og fort over telefon.",
  "ay.g3.q5": "Hvilket område jobber dere i?",
  "ay.g3.a5": "Sør på Gran Canaria: San Bartolomé de Tirajana og Mogán. Ligger boligen din et annet sted, si fra likevel, så sier vi ærlig fra om vi kan hjelpe deg eller ikke.",
  "ay.cta.h": "Finner du ikke spørsmålet ditt her?",
  "ay.cta.p": "Skriv til oss, så svarer vi på ditt språk, som regel samme dag. Uforpliktende, og ingen kommer til å ringe deg.",
  "ay.cta.btn": "Spør på WhatsApp",
  "ay.nav.priv": "Personvern",
  "ay.nav.aviso": "Juridisk informasjon",
  "ay.nav.ck": "Cookies",
  "ay.nav.ayuda": "Hjelp"
 },
 sv: {
  "ay.title": "Hjälpcenter — Activala®",
  "ay.meta": "Svar på de vanligaste frågorna om Activala: vad det kostar, vem som kommer in i ditt hus, vad man betalar och hur det deklareras.",
  "ay.h1": "Vad kan vi hjälpa dig med?",
  "ay.sub": "De frågor vi får oftast, besvarade rakt på sak. Hittar du inte din, skriv till oss på WhatsApp så svarar vi på ditt språk.",
  "ay.buscar": "Sök din fråga: pris, skatt, husdjur…",
  "ay.nada": "Ingen fråga innehåller de orden. Fråga oss direkt på WhatsApp så svarar vi.",
  "ay.g1": "Om du har ett hus",
  "ay.g1.q1": "Vad kostar det och när betalar man?",
  "ay.g1.a1": "Från 300 € i månaden, och <b>bara de månader din bostad är uthyrd</b>. Står bostaden tom betalar du ingenting: kommer ingen in en månad, finns det ingen avgift den månaden. Exakt pris för ditt fall får du skriftligt innan du bestämmer något.",
  "ay.g1.q2": "Måste jag lämna ifrån mig bostaden hela året?",
  "ay.g1.a2": "Nej. Du markerar de månader du inte använder den, och det är dem vi aktiverar. Resten är fortfarande dina och ingen rör dem: vi går inte in och vi ber dig inte förklara något.",
  "ay.g1.q3": "Vem kommer in i min bostad?",
  "ay.g1.a3": "Identifierade och kontrollerade personer som vi har pratat med skriftligt i förväg. Vi söker långa vistelser av nordeuropéer som kommer för att övervintra, inte helgfester. Passar någon oss inte, kommer den personen inte in.",
  "ay.g1.q4": "Och om något går sönder?",
  "ay.g1.a4": "Vi lagar det och berättar för dig. Löpande underhåll ingår: glödlampor, kranar och vardagens vitvaror. Dyker något stort upp frågar vi dig innan vi rör något.",
  "ay.g1.q5": "Binder ni mig med ett långt kontrakt?",
  "ay.g1.a5": "Det finns ingen exklusivitet och ingen bindningstid. Vill du ha din bostad för egen del en månad, då har du den. Vill du sluta, slutar du. Vi vill hellre att du stannar för att det lönar sig, inte för att du har skrivit under något.",
  "ay.g1.q6": "Hur vet jag hur min bostad mår när jag bor i ett annat land?",
  "ay.g1.a6": "Vi skickar en video och en rapport varje vecka. Du behöver inte fråga eller jaga oss: den kommer av sig själv, även när det inte har hänt något värt att berätta.",
  "ay.g2": "Om du söker bostad",
  "ay.g2.q1": "Behöver jag veta exakta datum?",
  "ay.g2.a1": "Nej. Berätta vilka månader du är intresserad av så visar vi vad som är ledigt. Datumen sätts efteråt, när du vet vilken bostad du gillar.",
  "ay.g2.q2": "Vad betalar jag och när?",
  "ay.g2.a2": "En handpenning när kontraktet skrivs under och resten vid ankomst. Inget mer: <b>ingen förmedlingsavgift, ingen separat städavgift och inga dolda tillägg</b>. Priset du ser är det du betalar.",
  "ay.g2.q3": "Och depositionen?",
  "ay.g2.a3": "Bara den som lagen anger, och du får tillbaka hela vid avresan om bostaden lämnas som du fann den. Den står i kontraktet, på ditt språk.",
  "ay.g2.q4": "Kan jag ta med min hund?",
  "ay.g2.a4": "Det beror på bostaden: ägaren bestämmer. Säg till när du skriver till oss så visar vi bara de bostäder som tillåter husdjur, så att du inte fastnar för en som inte går.",
  "ay.g2.q5": "Och om något går sönder under min vistelse?",
  "ay.g2.a5": "Du skriver till oss på WhatsApp så lagar vi det. Det ingår i det du betalar: vi skickar ingen faktura för ett fel som du inte har orsakat.",
  "ay.g3": "Pengar, papper och språk",
  "ay.g3.q1": "Deklareras det här?",
  "ay.g3.a1": "Ja, och det är precis poängen. Kontrakt i ordning, uthyrningen deklarerad och du sover gott. Vi arbetar inte på något annat sätt.",
  "ay.g3.q2": "Hur mycket skatt kommer jag att betala?",
  "ay.g3.a2": "Det beror på ditt fall, och därför sätter vi inga siffror på den här webbplatsen. Vi räknar på just din situation skriftligt och kostnadsfritt, så att du ser det innan du bestämmer dig. <b>Den slutliga beräkningen gör du alltid med din rådgivare</b>, som har alla dina uppgifter framför sig.",
  "ay.g3.q3": "Kommer ni att be om mina bankuppgifter på webben?",
  "ay.g3.a3": "Aldrig. På den här webbplatsen ber vi bara om namn, språk, e-post och WhatsApp. Varken id-handlingar eller konton: det kommer långt senare och bara om du bestämmer dig för att gå vidare.",
  "ay.g3.q4": "På vilka språk svarar ni?",
  "ay.g3.a4": "Spanska, tyska, engelska, norska och svenska. Vi svarar <b>skriftligt</b>, oftast på WhatsApp: då hinner vi översätta i lugn och ro och svara ordentligt, i stället för illa och snabbt i telefon.",
  "ay.g3.q5": "Vilket område arbetar ni i?",
  "ay.g3.a5": "På södra Gran Canaria: San Bartolomé de Tirajana och Mogán. Ligger din bostad någon annanstans, säg till ändå så säger vi ärligt om vi kan hjälpa dig eller inte.",
  "ay.cta.h": "Står inte din fråga här?",
  "ay.cta.p": "Skriv till oss så svarar vi på ditt språk, oftast samma dag. Utan förpliktelser och utan att någon ringer upp dig.",
  "ay.cta.btn": "Fråga på WhatsApp",
  "ay.nav.priv": "Integritet",
  "ay.nav.aviso": "Juridisk information",
  "ay.nav.ck": "Cookies",
  "ay.nav.ayuda": "Hjälp"
 }
};

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
