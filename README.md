# Darshil Kalyani — Portfolio

Personal portfolio website for Darshil Kalyani, a Computer Science graduate student at Concordia University seeking Winter 2027 software engineering, full-stack, backend, AI/ML, and data internships.

Plain **HTML, CSS, and JavaScript**. There's no framework, package installation, build step, database, analytics, or API key. The core page, including every link, works without JavaScript.

## Flagship projects

1. **ArXiv Semantic Search**: [github.com/Darshil999/arxiv-semantic-search](https://github.com/Darshil999/arxiv-semantic-search)
2. **DocuMind**: [github.com/Darshil999/DocuMind](https://github.com/Darshil999/DocuMind)
3. **BioPredict**: [github.com/Darshil999/BioPredict--Disease-Prediction-System](https://github.com/Darshil999/BioPredict--Disease-Prediction-System)
4. **NotiLytics**: [github.com/Darshil999/Notilytics](https://github.com/Darshil999/Notilytics)

A compact "Other projects" list follows them: BERT vs RoBERTa, DriveNow, and TravelEase.

## Folder structure

```
.
├── .github/workflows/pages.yml   GitHub Pages deployment (uploads dist/ only)
├── dist/                         The deployable website
│   ├── index.html                All page content
│   ├── styles.css                Design tokens, layout, breakpoints, reduced motion, print
│   ├── script.js                 Mobile menu, config-driven links, screenshots, résumé
│   ├── site-config.js            Project URLs, screenshot paths, public résumé URL
│   ├── favicon.svg
│   ├── 404.html
│   ├── .nojekyll
│   └── assets/                   Screenshots and the public résumé go here
├── firebase.json                 Optional Firebase Hosting fallback
├── HOSTING.md                    Deployment and custom-domain guide
└── README.md
```

## Local preview

```bash
python -m http.server 8000 --directory dist
```

Then open <http://localhost:8000>. On Windows, use `py` if `python` isn't on your PATH. You can also open `dist/index.html` directly in a browser.

## Add project screenshots

Each project card shows an intentional placeholder panel until a real screenshot is configured.

1. Capture a genuine screenshot of the running project with no private data. Use 16:9 (for example 1200 × 675) and save it as WebP, ideally under 200 KB:
   - `dist/assets/arxiv.webp`
   - `dist/assets/documind.webp`
   - `dist/assets/biopredict.webp`
   - `dist/assets/notilytics.webp`
2. In `dist/site-config.js`, set the matching entry, for example `arxiv: "assets/arxiv.webp"`.
3. Refresh. The placeholder is replaced with a lazy-loaded image. Its alt text comes from the card's `data-alt` attribute in `index.html`, so update that text if the screenshot shows something different.

The arXiv repository already includes real screenshots in `docs/screenshots/`, which you could convert to WebP.

## Add the public résumé later

1. Save a concise, public one-page résumé as `dist/assets/Darshil_Kalyani_Resume.pdf`.
2. In `dist/site-config.js`, set `resumeUrl: "assets/Darshil_Kalyani_Resume.pdf"`.
3. The hero **Résumé** button and the résumé section become PDF downloads.

The static fallback link also points directly to the PDF, so the résumé remains available even before JavaScript loads. **Never** place the internal master résumé or any private document in `dist/`, because everything in that folder is published.

## Add a live demo link

The cards currently show only GitHub links because none of the projects has a verified public deployment. Once a project is deployed, add a second link to its `.project-links` block in `index.html`:

```html
<a class="project-link" href="https://your-verified-demo-url" target="_blank" rel="noopener noreferrer">Live demo <span aria-hidden="true">↗</span></a>
```

## Edit content and design

- **Text:** edit `dist/index.html` directly. HTML comments mark the editable sections.
- **Colours:** change the variables at the top of `dist/styles.css`. Fonts use local system stacks, so there are no web-font downloads.
- **Layout:** the four flagship cards form a two-column grid on desktop and a single column below 760px. ArXiv Semantic Search and DocuMind use the `project-card--lead` modifier for extra emphasis.
- **Project details:** these use native `<details>` elements, so they work with keyboard, touch, and no JavaScript.

## Deployment

GitHub Pages is the primary host. `.github/workflows/pages.yml` publishes `dist/` on every push to `main`, and it can also be run manually. There's no build step and no secrets are needed. One-time setup: **Settings → Pages → Source: GitHub Actions**.

Once Pages is enabled on the `Darshil999.github.io` user-site repository, the address is `https://darshil999.github.io/`. All asset paths are relative, so the site also works on localhost and on a future custom domain.

A custom domain (for example one from the GitHub Student Developer Pack) can be connected later. See [HOSTING.md](HOSTING.md). Firebase Hosting remains documented there as an optional fallback.

## Content principles

- The current GitHub repositories are the source of truth for project descriptions.
- No invented metrics, accuracy figures, users, testimonials, or live-demo links.
- BioPredict is presented as an educational ML inference project, not a diagnostic tool.
- DocuMind's retrieval-augmented document indexing is listed as planned, not implemented.
- The phone number, GPA, and internal résumé material aren't published.
