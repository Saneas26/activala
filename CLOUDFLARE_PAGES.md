# Activala · Conectar el repo a Cloudflare Pages con el dominio

Igual que saneas.es: `main` = producción, cada rama = preview automática.

## 1. Crear el proyecto en Pages
1. dash.cloudflare.com → **Workers & Pages → Create → Pages → Connect to Git**.
2. Autoriza GitHub si lo pide y elige el repo **`Saneas26/activala`**.
3. Configuración del build (es una web estática, no hay build):
   - **Project name**: `activala`
   - **Production branch**: `main`
   - **Framework preset**: `None`
   - **Build command**: *(vacío)*
   - **Build output directory**: `/`
4. **Save and Deploy**. Primera URL: `activala.pages.dev`.

## 2. Dominio propio
1. Si `activala.es` aún no está en Cloudflare: **Add a domain** → seguir el asistente
   → cambiar los nameservers en el registrador al par que te dé Cloudflare.
2. En el proyecto Pages → **Custom domains → Set up a custom domain** → `activala.es`.
3. Añade también `www.activala.es` y Cloudflare lo redirige solo.
4. El certificado HTTPS se emite automáticamente en unos minutos.

## 3. Previews por rama (el ciclo de siempre)
- Cada push a una rama publica preview en `<rama-normalizada>.activala.pages.dev`.
- Nada se fusiona a `main` sin tu «fusiona»; al fusionar, producción se actualiza sola.

## 4. Después de estrenar
Cuando `activala.es` esté público: actualizar el pie de **todas** las webs del grupo
(la tarjeta Activala deja el «Muy pronto» y enlaza a la web). La rama para saneas.es
ya queda preparada aparte.
