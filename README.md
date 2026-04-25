# Forward Today

Brigid's tutoring website. Built with React, Vite, Tailwind v4, and shadcn/ui. Hosted on GitHub Pages.

---

## Development

All source code lives in the `client/` directory.

```bash
cd client
npm install
npm run dev
```

Then open http://localhost:5173.

---

## Deploying

Deployment is fully automatic. Just push to `main` and GitHub Actions will build the site and publish it to GitHub Pages within ~60 seconds.

You never need to run a build or deploy command manually.

**How it works:** `.github/workflows/deploy.yml` triggers on every push to `main`. It installs dependencies, runs `npm run build` inside `client/`, and uploads the output (`client/dist/`) to GitHub Pages using the official Actions.

To check the status of a deployment: go to the repo on GitHub → **Actions** tab.

---

## Stack

| Thing | What it is |
|---|---|
| React + Vite | UI framework + dev server/bundler |
| Tailwind v4 | Utility CSS |
| shadcn/ui | Component library |
| GitHub Actions | CI/CD — auto deploys on push to main |
| GitHub Pages | Free static hosting |
