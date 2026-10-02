# Hosting

Repository: <https://github.com/Darshil999/Darshil999.github.io>

The portfolio is a static site in `dist/`. **GitHub Pages** is the primary host. **Firebase Hosting** is documented below as an optional fallback. Neither one hosts the backends of the showcased projects; the portfolio links to their repositories.

## GitHub Pages (primary)

The workflow at `.github/workflows/pages.yml`:

- runs on every push to `main`, and manually through **Run workflow** (`workflow_dispatch`)
- uploads **only** `dist/` as the Pages artifact, with no build step and no secrets
- deploys with the official `actions/configure-pages`, `actions/upload-pages-artifact`, and `actions/deploy-pages` actions to the `github-pages` environment

### One-time setup

1. Push the repository to GitHub, including `.github/workflows/pages.yml`.
2. Open **Settings → Pages**. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Open **Actions → Deploy portfolio to GitHub Pages**. Re-run the latest run, or use **Run workflow** on `main`. The first run can fail if it started before Pages was enabled; re-running fixes that.
4. When the job succeeds, the URL appears in the run summary and in **Settings → Pages**.

Once deployed, the default address is `https://darshil999.github.io/`. All paths in the site are relative, so the same files also work on localhost and a future custom domain.

`dist/.nojekyll` is kept so the folder can also be published from a branch without Jekyll processing.

## Custom domain

Configure this only **after you actually own the domain** (for example, one claimed through the GitHub Student Developer Pack, such as `darshilkalyani.dev`). `example.dev` below is a placeholder.

1. **Verify the domain (recommended).** In your GitHub account, open **Settings → Pages → Add a domain** and follow the TXT-record verification. This prevents anyone else from taking over the domain on GitHub Pages.
2. **Add DNS records at your registrar.**

   | Type | Name | Value |
   | --- | --- | --- |
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `darshil999.github.io` |

   Optional IPv6 `AAAA` records for `@`: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.

   - The CNAME target is `darshil999.github.io` only, with no `https://` and no repository path.
   - **Don't** create wildcard records (`*.example.dev`). They let others serve content on your subdomains.
   - Remove conflicting `@` or `www` web records (for example, registrar parking pages). Keep unrelated records such as email `MX`/`TXT`.
3. **Set the domain in GitHub.** In the repository's **Settings → Pages → Custom domain**, enter `example.dev` (or `www.example.dev`) and save. GitHub redirects between the apex and `www` automatically when both are configured.
4. **Wait for DNS propagation.** This usually takes minutes but can take up to 24–48 hours. Check with `nslookup example.dev` or `dig example.dev +short`.
5. **Enable HTTPS.** When the certificate is ready, tick **Enforce HTTPS** in **Settings → Pages**. `.dev` domains require HTTPS in browsers, so the site won't load over plain HTTP.

Because this repository deploys through GitHub Actions, the custom domain is stored in the Pages settings. **No `CNAME` file is needed**, and none is committed.

After the domain works, update `dist/index.html`: add `<link rel="canonical" href="https://example.dev/">` and `<meta property="og:url" content="https://example.dev/">` where the `<head>` comment indicates.

## Firebase Hosting (optional fallback)

`firebase.json` serves `dist/` and skips Markdown and dotfiles. No Firebase SDK, database, or backend is used.

```bash
npm install -g firebase-tools
firebase login
firebase deploy --only hosting --project YOUR_FIREBASE_PROJECT_ID
```

Replace `YOUR_FIREBASE_PROJECT_ID` with the project ID from the [Firebase console](https://console.firebase.google.com/). For a custom domain on Firebase, use **Hosting → Add custom domain** and copy the exact records that wizard shows. They differ from the GitHub records above. Use one host for a domain, not both.

## Official references

- [Using custom workflows with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Managing a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Verifying your custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
- [Securing GitHub Pages with HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
- [Firebase Hosting quickstart](https://firebase.google.com/docs/hosting/quickstart)
