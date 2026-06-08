
  # DM Net website

  This is a code bundle for DM Net website. The original project is available at https://www.figma.com/design/2wwmYCDpkIkXkq4GpKeimK/DM-Net-website.

  ## Running the code

  Run `npm install` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Netlify deployment

  This project is configured for Netlify deployment with a static build and a Netlify Function for the mail backend.

  ### Build command

  - `npm run build`

  ### Publish directory

  - `dist`

  ### Netlify configuration

  The project includes `netlify.toml` with:

  - `/api/send-mail` redirected to `/.netlify/functions/send-mail`
  - SPA fallback: `/*` to `/index.html`

  ### Required environment variables

  Set these in Netlify site settings under Environment Variables:

  - `SMTP_HOST` — SMTP server host
  - `SMTP_PORT` — SMTP server port (usually `587`)
  - `SMTP_SECURE` — `true` or `false`
  - `SMTP_USER` — SMTP username
  - `SMTP_PASS` — SMTP password
  - `MAIL_FROM` — optional sender email (defaults to `SMTP_USER`)
  - `MAIL_TO` — recipient email for form submissions

  ### Local function testing

  The mail endpoint is now served by a Netlify Function at `/api/send-mail`.
  When running locally, the frontend still calls `/api/send-mail`.

  If you want to test the backend locally without Netlify, you can keep using `node server.js`.
  