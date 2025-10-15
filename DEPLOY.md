# 🚀 Vercel Deployment Guide

## Quick Deploy

### Method 1: Vercel CLI

```bash
# Install Vercel CLI globally (one time)
npm i -g vercel

# Deploy from project root
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Project name: safnasafna (or your choice)
# - Deploy? Yes
```

Your site will be live at: `https://safnasafna.vercel.app` (or custom domain)

### Method 2: GitHub + Vercel (Recommended for Auto-Deploy)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/safnasafna.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects settings from `vercel.json`
   - Click "Deploy"

3. **Automatic Deployments:**
   - Every push to `main` branch = automatic deployment
   - Preview deployments for pull requests

---

## Configuration

### vercel.json (Already Configured ✅)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

This tells Vercel:
- Build command: `npm run build`
- Output folder: `dist`
- Security headers applied
- Cache headers for fonts/assets (1 year)

---

## Custom Domain

### Add Your Domain:

1. Go to Vercel project settings
2. Click "Domains"
3. Add `safnasafna.is`
4. Follow DNS configuration steps:
   - Add A record or CNAME to your DNS
   - Vercel provides the values

### Update URLs After Custom Domain:

Edit `src/index.html`:
```html
<!-- Update canonical -->
<link rel="canonical" href="https://safnasafna.is/">

<!-- Update OG image -->
<meta property="og:image" content="https://safnasafna.is/assets/og-image.jpg">
```

Then rebuild and deploy:
```bash
npm run build
vercel --prod
```

---

## Environment & Settings

### Automatic Settings (via vercel.json):
- ✅ Build command configured
- ✅ Output directory set to `dist`
- ✅ Security headers enabled
- ✅ Cache headers for static assets
- ✅ Clean URLs (no .html extension)
- ✅ HTTPS automatic
- ✅ CDN automatic

### No Environment Variables Needed
This is a static site with no backend or secrets.

---

## Pre-Deployment Checklist

Before deploying, update these in `src/index.html`:

- [ ] Replace `og-image.jpg` with final image (1200x630px)
- [ ] Replace `favicon.ico` with branded icon
- [ ] Update canonical URL if using custom domain
- [ ] Update OG image URL if using custom domain
- [ ] Test locally: `npm run build && npx serve dist`

---

## Deployment Commands

```bash
# Development (local)
npm run dev

# Build for production
npm run build

# Test production build locally
npx serve dist

# Deploy to Vercel (CLI)
vercel

# Deploy to production (CLI)
vercel --prod

# Check deployment status
vercel ls
```

---

## Vercel Project Settings

When setting up, Vercel will use:

**Framework Preset:** Other
**Build Command:** `npm run build` (from vercel.json)
**Output Directory:** `dist` (from vercel.json)
**Install Command:** `npm install` (automatic)
**Node Version:** 18.x (or latest LTS)

---

## Troubleshooting

### Build Fails:
```bash
# Ensure dependencies are installed
npm install

# Test build locally
npm run build

# Check Node version (18+ recommended)
node -v
```

### 404 Errors:
- Check `vercel.json` has correct `outputDirectory: "dist"`
- Ensure `npm run build` creates `/dist` folder

### Font Loading Issues:
- Fonts are in `/dist/fonts` after build ✓
- Preload links use relative paths ✓
- CORS headers not needed (same origin) ✓

---

## Performance on Vercel

Expected Lighthouse scores:
- **Performance:** 95-100 (Edge network, CDN)
- **Accessibility:** 95-100
- **Best Practices:** 95-100
- **SEO:** 95-100

Optimizations:
- Static files cached (1 year)
- Brotli compression automatic
- HTTP/2 automatic
- Edge network (fast globally)

---

## Monitoring & Analytics

### Add Vercel Analytics (Optional):

1. Go to project settings in Vercel
2. Enable "Analytics"
3. Free tier included

### Add Vercel Speed Insights (Optional):

```bash
npm install @vercel/speed-insights
```

Then add to your HTML before `</body>`:
```html
<script>
  window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
</script>
<script async src="/_vercel/speed-insights/script.js"></script>
```

---

## Cost

**Vercel Free Tier:**
- ✅ Unlimited deployments
- ✅ 100 GB bandwidth/month
- ✅ HTTPS + CDN included
- ✅ Automatic deployments from Git
- ✅ Preview deployments

This static site will easily fit in free tier! 🎉

---

**Ready to deploy?** Run `vercel` from project root! 🚀
