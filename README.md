# MelodyForge AI starter website

This is a static website starter for a custom AI music business. It includes:
- Responsive homepage and package cards
- Song request form with a client-side order summary
- Package selection buttons
- No external JavaScript libraries or build step

## Important limitation
This starter is NOT yet a complete AI music generator or checkout. The form runs in the visitor's browser only; it does not save or email orders, take payments, or generate audio. Do not advertise it as doing those things until you connect and test the required services.

## Run it on your computer (Windows 11)
1. Download and extract `melodyforge-ai-starter.zip`.
2. Open the extracted folder.
3. Double-click `index.html` to preview in your browser.
4. To edit the text, open `index.html` in VS Code or Notepad.
5. To change the colors and layout, edit `styles.css`.
6. To change the form behavior, edit `script.js`.

## Publish on Vercel (static site)
1. Create a GitHub account at https://github.com if needed.
2. Create a new repository named `melodyforge-ai`.
3. Upload `index.html`, `styles.css`, and `script.js` to the repository root.
4. Sign in at https://vercel.com and choose **Add New → Project**.
5. Import the `melodyforge-ai` GitHub repository.
6. Framework preset: **Other**. Build command: leave blank. Output directory: leave blank or `.` if requested.
7. Click **Deploy**. Open the deployment URL and test the page on desktop and phone.

## Turn it into a real paid AI music service
Complete these in order:
1. **Order intake:** connect the form to a secure backend or form provider so orders are delivered to you. Add spam protection and privacy wording.
2. **Payments:** create products in a payment provider such as Stripe or PayPal. Use hosted checkout links or a server-created checkout session. Never put secret API keys in `script.js` or any browser code.
3. **Music generation:** select a music provider whose API and commercial terms explicitly permit your business model. Confirm commercial-use rights, generated-track ownership, customer usage rights, attribution requirements, output limits, and whether resale/white-label use is allowed.
4. **Backend:** add a server-side endpoint to validate the request, create the payment session, and call the generation provider only after payment is confirmed. Keep all API secrets in Vercel environment variables.
5. **Delivery:** store generated files safely, send customers a private download link, and define retention/deletion rules.
6. **Test:** test failed payments, duplicate submissions, invalid form inputs, generation errors, refunds, and mobile layouts before accepting live orders.

## Suggested initial operating model
Start as a manual custom-song service: receive the brief, confirm price and rights, collect payment through a hosted payment link, create the track using an approved provider, review it, then deliver it. This is the simplest route for a budget under $500. Check provider terms and payment fees before launching.
