# Darshil Kalyani: Portfolio

A one-page portfolio built with plain HTML, CSS and a little JavaScript. There's no framework and no build step. Open `index.html` in a browser and it works.

```
index.html          ← all the text on the site (edit this)
styles.css          ← colors, fonts, layout (colors are at the top)
script.js           ← mobile menu + nav highlight (you won't need to touch it)
assets/favicon.svg  ← browser tab icon
assets/Darshil_Kalyani_Resume.pdf  ← ADD THIS (phone-free version)
```

---

## 1. Before you share the link (to-do list)

Placeholders show up **orange with a dashed border** on the page, so you can't miss them. Search `index.html` for `PLACEHOLDER`, `ph-link` and `EDIT` to find each one.

| # | What | How |
|---|------|-----|
| 1 | Resume PDF | Save a version **without your phone number** as `assets/Darshil_Kalyani_Resume.pdf`. Then remove `ph-link` from the Resume button. |
| 2 | Repo links | Replace each `https://github.com/Darshil999` placeholder with the exact repo URL. Remove `ph-link`. Also check the DocuMind URL. |
| 3 | DocuMind result | Deploy it (frontend on Vercel, backend on Render; both free). Replace the placeholder with a "Live demo →" link. |
| 4 | ArXiv numbers | Run `GET /<index>/_count` in Elasticsearch. Time a few queries. Fill in the real numbers. |
| 5 | BioPredict accuracy | The `.pkl` models still exist. Load each one, score it on a test split and add the real accuracy. |
| 6 | PRL "10 minutes" | Confirm with your supervisor that it's **per observation run**. Reword if it's something else. |
| 7 | DocuMind README | Remove the "source references" claim, and the fake "retrieves live context and cites sources" text in `client/src/lib/docassist/skills/query-documentation.ts`. The app doesn't retrieve docs; it only uses a scoped system prompt. |
| 8 | Repo READMEs | Every linked repo needs a one-line description, a screenshot, the tech used and how to run it. |

If you can't get a real number, **delete the placeholder line**. Don't guess.

---

## 2. How to edit

- **Text:** open `index.html`. Each block has a comment like `<!-- EDIT: Project 1 -->`. Change the words between the tags.
- **Add a project:** copy one whole `<article class="card project"> … </article>` block and paste it below. Edit it.
- **Add a skill:** add `<li>Skill</li>` inside the right `<ul class="tags">`.
- **Colors:** change the variables at the top of `styles.css` (`--accent` is the green).
- **Preview:** double-click `index.html`, or run `python3 -m http.server` in this folder and open http://localhost:8000.

---

## 3. Hosting for free: use GitHub Pages

**Why GitHub Pages instead of Firebase Hosting:**

- Your code is already on GitHub, so publishing takes one setting. Firebase needs the Node CLI, a Google Cloud project, `firebase init` and `firebase deploy` every time you change something.
- Every `git push` updates the site automatically.
- It's free, with HTTPS and custom domains included.
- Firebase is the better choice when you need a backend (database, login). A portfolio doesn't.
- Netlify and Cloudflare Pages are equally good alternatives if you ever want preview links for drafts. They aren't needed here.

**One thing to know:** free GitHub Pages only works on **public** repositories.

### Steps

1. **Get the files onto your `main` branch.** The site was built on the branch `claude/cs-portfolio-internship-e42gys`. On GitHub, open a pull request from that branch into `main` and merge it. If the repo has no `main` yet, create it from this branch.
2. **Optional but recommended: rename the repo** to `Darshil999.github.io` (Settings → General → Repository name).
   - With the rename, your site lives at **https://darshil999.github.io**.
   - Without it, the site is at https://darshil999.github.io/Darshil_Portfolio/.
3. **Make the repo public:** Settings → General → Danger Zone → Change visibility.
4. **Turn on Pages:** Settings → **Pages** → *Build and deployment*:
   - Source: **Deploy from a branch**
   - Branch: **main**, folder **/ (root)** → Save
5. Wait 1–2 minutes and refresh the Pages settings screen. It shows your live URL.
6. **To update later:** edit the files, then `git add . && git commit -m "update" && git push`. The site updates in about a minute.

---

## 4. Connecting a custom domain

A domain like `darshilkalyani.dev` or `darshilkalyani.com` looks more professional than `github.io`. It costs about CA$15/year.

**Where to buy:** Cloudflare Registrar or Porkbun. Both sell at cost with no renewal price jumps. As a student you can also claim a **free `.me` domain for 1 year** through the GitHub Student Developer Pack (Namecheap).

### Steps

1. **Buy the domain.**
2. **In GitHub:** Settings → Pages → *Custom domain* → type `darshilkalyani.com` (your domain) → Save. This creates a `CNAME` file in the repo. Leave it there.
3. **At your domain provider's DNS settings,** add these records:

   | Type  | Name / Host | Value |
   |-------|-------------|-------|
   | A     | `@`         | `185.199.108.153` |
   | A     | `@`         | `185.199.109.153` |
   | A     | `@`         | `185.199.110.153` |
   | A     | `@`         | `185.199.111.153` |
   | CNAME | `www`       | `darshil999.github.io` |

   - Delete any other `A` or `CNAME` records for `@` or `www` that the provider added by default (parking pages).
   - On Cloudflare, set these records to **"DNS only"** (grey cloud) so GitHub can issue your HTTPS certificate.
4. Wait 10 minutes to a few hours for DNS to update. Then go back to Settings → Pages and tick **Enforce HTTPS**.
5. **Optional:** in your GitHub account settings (Settings → Pages → *Add a verified domain*), verify the domain so nobody else can claim it on GitHub.

Checking: `https://yourdomain.com` and `https://www.yourdomain.com` should both load the site with a padlock icon.
