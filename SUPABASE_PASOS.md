# Activala · Supabase (formulario de interesados) — ESTADO

HECHO por develosenior el 26/07/2026 desde el panel: proyecto `activala`
(uikanfvigunjhzibnhxf, región Europa), tabla `interesados` insert-only con RLS,
extensión pg_net + trigger, Edge Function `avisar-interesado` desplegada con
«Verify JWT» desactivado, secreto `INTERESADOS_EMAIL` puesto, y la web conectada
(URL + clave publishable en index.html). Probado: INSERT anónimo 201, SELECT anónimo vacío.

## LO ÚNICO QUE FALTA (tú, 2 minutos)

1. **Secreto `RESEND_API_KEY`**: Supabase → proyecto activala → Edge Functions →
   Secrets → añade `RESEND_API_KEY` con tu API key de resend.com (vale la de siempre).
   Sin él, los envíos se guardan en la tabla igualmente, pero no llega el aviso al correo.
2. ~~Verificar activala.es en Resend~~ NO HACE FALTA: el plan Free de Resend solo
   admite 1 dominio (el Pro son 20 $/mes). El aviso es interno, así que sale como
   `Activala <activala@saneas.es>` (dominio ya verificado) con `reply_to` al email
   del interesado: al darle a «Responder» le escribes a él. Si algún día Activala
   manda correos a clientes, se revisa.

## Ver los interesados
Table Editor → `interesados` (hay una fila PRUEBA develosenior que puedes borrar desde ahí).
