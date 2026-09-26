# Host your portfolio for free

Repository: https://github.com/Darshil999/Darshils_Portfolio

Expected GitHub Pages address after enabling Pages and a successful deployment: https://darshil999.github.io/Darshils_Portfolio/ (not a claim that it is already live).

Recommended: **GitHub Pages**. Your portfolio is a static website, so GitHub Pages can serve every page, style, image, and script it needs. It keeps your source code and website updates together. A public repository works with GitHub Free. A custom domain can be connected, with HTTPS supported. The free `github.io` address avoids buying a domain.

**Firebase Hosting is also a website host.** Its Spark plan includes a no-cost Hosting quota. It is a valid alternative, especially if you already use Firebase. For this portfolio, GitHub Pages needs fewer moving parts because you already want the source in GitHub. No Firebase SDK, database, authentication service, or backend is needed.

Hosting can be free; buying and renewing your own domain is usually a separate cost.

Instructions checked against official documentation on September 23, 2026. Providers can change settings and quotas.

## Option A — GitHub Pages

### 1. Create or choose the repository

For your main personal site, create a **public** repository named `Darshil999.github.io` if that exact repository is not already in use. Use `portfolio` instead if you prefer a separate project repository. Do not replace an existing site without first reviewing its contents.

Once published, a user-site repository named `Darshil999.github.io` uses `https://darshil999.github.io/`. A repository named `portfolio` ordinarily uses `https://darshil999.github.io/portfolio/`. These are examples based on your supplied username, not a claim that either site is live.

### 2. Add the portfolio files

Unzip the download. The repository root should contain `dist/`, `README.md`, `HOSTING.md`, `firebase.json`, and `.github/workflows/pages.yml`.

The important website entry point is `dist/index.html`. Keep that folder structure for the included deployment workflow.

You can use GitHub's **Add file → Upload files** or Git on your computer. If uploading through the browser, make sure `.github/workflows/pages.yml` is also included. If your file picker hides `.github`, create the workflow through **Add file → Create new file** and paste its supplied contents.

With Git, after creating a new empty repository, run these commands inside the extracted portfolio folder. The following uses your repository, `Darshils_Portfolio`:

```bash
git init
git add .
git commit -m "Add personal portfolio"
git branch -M main
git remote add origin https://github.com/Darshil999/Darshils_Portfolio.git
git push -u origin main
```

Authenticate using your normal GitHub login method when prompted. Do not put credentials in site files. If the repository already has commits, clone it and copy the portfolio files into that checkout instead of initializing a competing history.

### 3. Enable Pages

1. Open your repository on GitHub.
2. Select **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Open **Actions → Deploy portfolio to GitHub Pages**.
5. Select **Run workflow**, use the `main` branch, and run it. If the push already ran successfully, another run is unnecessary.
6. When the job succeeds, use the website URL shown by the deployment or **Settings → Pages**.

The supplied workflow uploads only `dist/`, then deploys it. There is no compilation step. Future pushes to `main` publish updates automatically after Pages has been enabled.

If your default branch has another name, change the `branches` value in `.github/workflows/pages.yml` and run that branch. A first run can fail if Pages had not yet been enabled; enable it, then re-run the job.

### Simpler alternative without GitHub Actions configuration

Upload **the contents of `dist/`** to the repository root so `index.html` is at the top level. In **Settings → Pages**, choose **Deploy from a branch**, then `main` and `/ (root)`, and save. For this route, do not add the included deployment workflow. Keep a `.nojekyll` file alongside `index.html`.

Use one publishing method consistently. The main instructions above keep the complete source folder layout intact.

## Connect your own domain to GitHub Pages

Use a domain you own; `example.com` below is a placeholder.

1. In the repository's **Settings → Pages → Custom domain**, enter `www.example.com` and save.
2. At the domain registrar's DNS screen, add a **CNAME** record with name `www` and target `Darshil999.github.io`. Do not include `https://` or a repository path.
3. To support the bare domain too, add these four **A** records:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

4. Resolve conflicting website records for `@` or `www`, preserving unrelated email records.
5. Wait for DNS and certificate provisioning. In **Settings → Pages**, enable **Enforce HTTPS** once available; this can take up to 24 hours.

With the included Actions workflow, the domain is configured in Pages settings; a `CNAME` file is not required. For branch-based publishing, GitHub creates a `CNAME` file—keep it in future updates. Replace the example username if you publish under a different account.

## Option B — Firebase Hosting

Use **Firebase Hosting** for this static website.

1. Create or select a project in the [Firebase console](https://console.firebase.google.com/). The Spark plan includes a no-cost Hosting quota.
2. Install Node.js and npm if not already installed, then install and sign in to the Firebase CLI:

```bash
npm install -g firebase-tools
firebase login
```

3. Open a terminal in the portfolio folder containing `firebase.json`. The supplied configuration serves `dist/`. Replace `YOUR_FIREBASE_PROJECT_ID` below with the actual project ID from your Firebase console, then deploy:

```bash
firebase deploy --only hosting --project YOUR_FIREBASE_PROJECT_ID
```

4. Open the Hosting URL returned by the CLI. Future updates use the same command.

If you prefer the guided setup, run `firebase init hosting`, choose your project, enter `dist` as the public directory, answer **No** to the single-page-app rewrite, and **No** if asked to overwrite `dist/index.html`. This portfolio has one static page and does not need a JavaScript router. Re-run the deploy command after initialization.

The `firebase.json` file is already provided, so the direct deployment route does not require initialization. Firebase Hosting's built-in SSL and project subdomain are included. Hosting quotas still apply; check your project's usage.

### A custom domain on Firebase

In **Firebase console → Hosting**, choose **Add custom domain**. Enter the domain you own, then copy the exact verification and routing DNS records shown by that wizard into your registrar. Wait for Firebase to verify the domain and provision its SSL certificate. Use Firebase's displayed records, not the GitHub records above.

## Before sharing with recruiters

Replace project repository placeholders with genuine URLs; add screenshots and a concise public résumé PDF. Check the site on your phone and laptop, click every link, and make sure project details describe what you can explain in an interview. Update the Winter 2027 availability when it changes.

## Official references

- [GitHub Pages overview](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Publishing sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Custom domains and DNS records](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [HTTPS on GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
- [Firebase Hosting setup](https://firebase.google.com/docs/hosting/quickstart)
- [Firebase pricing plans](https://firebase.google.com/docs/projects/billing/firebase-pricing-plans)
- [Firebase custom domains](https://firebase.google.com/docs/hosting/custom-domain)
