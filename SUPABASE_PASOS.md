# CasActiva · Pasos de Supabase (formulario de interesados)

Como siempre: tú pegas, la web queda conectada. Tu correo **jamás** aparece en el código.

## 1. Crear el proyecto
1. supabase.com → **New project** en la organización de siempre.
2. Nombre: `casactiva` · Región: `eu-west` (la más cercana) · Contraseña de base: guárdala en tu gestor.
3. Cuando termine de crear, apunta dos cosas de **Settings → API**:
   - **Project URL** (ej. `https://abcd1234.supabase.co`)
   - **Publishable key** (la `anon`/publishable; es pública por diseño)

## 2. Crear la tabla y el aviso
1. Abre **SQL Editor** → pega `supabase/interesados.sql` **entero**.
2. Antes de ejecutar, sustituye `<PROYECTO>` (aparece una vez) por la ref de tu URL
   (lo que va antes de `.supabase.co`, ej. `abcd1234`).
3. **Run**. Es idempotente: se puede volver a ejecutar sin romper nada.

## 3. Desplegar la Edge Function
1. **Edge Functions → Deploy a new function** → nombre exacto: `avisar-interesado`.
2. Pega el contenido de `supabase/avisar-interesado.ts`.
3. En la configuración de la función, **desactiva «Enforce JWT verification»**
   (la llama el trigger interno, no un cliente).

## 4. Secretos (aquí va tu correo, nunca en el código)
En **Edge Functions → Secrets** (o Settings → Edge Functions):

| Secreto | Valor |
|---|---|
| `RESEND_API_KEY` | La API key de Resend (vale la de siempre si compartes cuenta) |
| `INTERESADOS_EMAIL` | Tu correo, el que recibirá los avisos |

## 5. Resend
1. resend.com → **Domains → Add domain** → `casactiva.es`.
2. Añade en Cloudflare (DNS del dominio) los registros que te dé Resend y verifica.
3. El remitente que usa la función es `CasActiva <app@casactiva.es>`.
   - Mientras el dominio no esté verificado, puedes probar cambiando el `from`
     de la función a un dominio ya verificado del grupo.

## 6. Conectar la web
En `index.html`, al principio del `<script>` del final, rellena:

```js
const SUPABASE_URL = 'https://abcd1234.supabase.co';
const SUPABASE_KEY = 'sb_publishable_...';
```

(Dímelo y lo hago yo en la rama, con commit.)

## 7. Probar
1. Abre la web, rellena el formulario y envía.
2. **Table Editor → interesados**: tiene que aparecer la fila.
3. Tu correo: tiene que llegar el aviso «CasActiva · nuevo propietario: …».
4. Comprueba que desde el navegador NO se puede leer la tabla
   (la web solo inserta; select/update/delete están denegados por RLS).
