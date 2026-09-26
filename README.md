# Darshil Kalyani portfolio

A lightweight portfolio for Winter 2027 internships, built with HTML, CSS, and JavaScript. No framework, database, package installation, API key, or build process is required.

## Open it

Open `dist/index.html` in a browser. All site assets are local and the core page works without JavaScript. For a local server, run `python -m http.server 8000 --directory dist`, then visit `http://localhost:8000`.

## Files you will edit

| File | Purpose |
| --- | --- |
| `dist/index.html` | Name, availability, introduction, projects, experience, skills, education, contact |
| `dist/styles.css` | Colors, typography, layouts, mobile breakpoints, reduced-motion and print styles |
| `dist/site-config.js` | Project repository URLs and public résumé PDF URL |
| `dist/script.js` | Mobile navigation and enabling configured links |
| `dist/assets/` | Your real screenshots and public résumé |
| `HOSTING.md` | GitHub Pages, Firebase Hosting, custom domain setup |
| `.github/workflows/pages.yml` | Publish the `dist` folder through GitHub Actions |
| `firebase.json` | Optional Firebase Hosting configuration |

## Add your repository links

Edit `dist/site-config.js`. Replace each `null` with a quoted, real URL. Unknown links intentionally remain disabled and labeled as placeholders. The GitHub profile and LinkedIn links already use the contact details you supplied.

```js
window.PORTFOLIO = {
  resumeUrl: "assets/Darshil_Kalyani_Resume.pdf",
  projects: {
    documind: "https://github.com/Darshil999/REPLACE-WITH-REAL-REPO",
    notilytics: null,
    biopredict: null,
    drivenow: null
  }
};
```

The repository name in that example is explicitly a placeholder. Do not publish the example as a working link.

## Add your public résumé

1. Save a concise, public-facing résumé as `dist/assets/Darshil_Kalyani_Resume.pdf`.
2. Set `resumeUrl` as shown above.
3. Refresh the site. Both résumé links become PDF downloads and the placeholder message is replaced.

The internal master résumé and dossiers are not included. They are background material, not suitable public downloads.

## Replace screenshot placeholders

Save a screenshot such as `dist/assets/documind.webp`. In `index.html`, replace that project's complete `<div class="project-visual ...">...</div>` block with:

```html
<img class="project-screenshot"
     src="assets/documind.webp"
     alt="DocuMind conversation showing a documentation question and response"
     width="1200" height="550"
     loading="lazy" decoding="async">
```

Update the filename and alt text for each project. Use genuine screenshots with no private data, and aim for less than 200 KB per image. The image styling preserves the screenshot without cropping. If screenshots are unavailable, you can retain the explicitly marked placeholders while reviewing the draft.

## Change the design or text

The color variables are at the top of `styles.css`. The font stacks use locally available fonts, avoiding external font downloads. The desktop projects form two columns; mobile projects form one. Native `<details>` elements make project descriptions expandable with a keyboard or touch.

Content is written directly in HTML for accessibility, search engines, and easy editing. There is no CMS or generated content to rebuild. Keep the HTML comments marking the editable sections. Change the Winter 2027 availability line when your internship search changes.

## Content decisions

- NotiLytics and BioPredict are presented as solo projects, following your explicit clarification.
- PRL and Plumscope are in Experience, with team contributions described as such.
- PRL's unverified percentage improvement and BioPredict's performance targets are not presented as measured results.
- BioPredict is described as an educational ML prototype.
- No fictional users, performance statistics, testimonials, or clinical claims have been added.
- Your phone number and GPA are omitted from the public portfolio.
- Screenshots, individual project repository URLs, and public résumé are the remaining placeholders.

## Checks performed

JavaScript syntax, unique HTML IDs, section links, local asset references, heading structure, and CSS brace balance were checked. The initial HTML, CSS, and JavaScript total approximately 42 KB before compression. This is file size, not a measured loading speed.

Responsive breakpoints, reduced motion, visible keyboard focus, a skip link, semantic headings, and navigation without JavaScript are implemented. A browser-based visual/device test was not available in the build environment. Before public launch, inspect at phone and desktop widths, open each project detail, navigate with Tab, test the mobile menu and Escape key, and try the email and résumé links.

## Publish

Follow `HOSTING.md`. GitHub Pages is the recommended option for this static portfolio. Firebase Hosting is also supported. Neither hosts the PHP/Java/Python project backends shown in the portfolio; those projects are showcased here through descriptions, screenshots, and links.
