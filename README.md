# Manish Dubey — Portfolio Website

This is a simple, fast, **no-build** portfolio site (HTML/CSS/JS). It includes:
- `index.html` (single-page site)
- `assets/profile.jpg` (your photo)
- `assets/CV_EN_Manish_Dubey.pdf` (downloadable CV)

## Quick edit
Open `index.html` and update:
- Any text (projects, GitHub, YouTube, etc.)
- Contact links

## Run locally (2 easy options)
### Option A: VS Code Live Server
1. Open the folder in VS Code
2. Install **Live Server**
3. Right-click `index.html` → **Open with Live Server**

### Option B: Python local server
```bash
cd manish_portfolio_site
python -m http.server 8000
```
Then open http://localhost:8000

## Deploy / hosting (recommended)
### 1) GitHub Pages (free)
1. Create a repo: `manish-portfolio`
2. Upload all files (keep `index.html` at repo root)
3. Repo Settings → Pages → Deploy from branch → `main` / root
4. Your site will be available at `https://<username>.github.io/manish-portfolio/`

### 2) Netlify (free & easiest)
1. Drag-and-drop the folder in Netlify (or connect your GitHub repo)
2. Build command: **none**
3. Publish directory: **(root)**

### 3) Cloudflare Pages (free)
Connect GitHub repo → Framework preset: **None** → Deploy.

### 4) Vercel (free)
Import Git repo → Framework: **Other / Static** → Deploy.

## Custom domain
All hosts above support custom domains (e.g., `manishdubey.dev`).
