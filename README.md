# Activala® · Web de marketing

El alquiler activo del sur de Gran Canaria. Marca del grupo Saneas.

- Web estática sin build: `index.html` + `privacidad.html`. Guardar es desplegar.
- Modelo del grupo: `MODELO_GRUPO_SANEAS.md` en la raíz de `Saneas26/saneas`.
- Formulario de interesados: patrón del grupo (tabla insert-only + Edge Function + Resend).
  Pasos en `SUPABASE_PASOS.md`. El correo de destino vive en secretos, nunca aquí.
- Hosting: Cloudflare Pages (`main` = producción, ramas = preview). Chuleta en `CLOUDFLARE_PAGES.md`.
