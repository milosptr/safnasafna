# Safna Safna

Hagkvæmar og vinsælar fjáröflanir fyrir íþróttafélög og aðra hópa.

**Typography:**
- Body text: DM Mono (monospace - Regular 400, Medium 500)
- Headings: Mozilla Headline (SemiBold 600, Bold 700)
- All fonts self-hosted (WOFF2 only, 60KB total)

## Setup

Install dependencies:

```bash
npm install
```

## Development

Run development server with watch mode:

```bash
npm run dev
```

This will watch for changes in your source files and automatically rebuild the CSS.

## Production Build

Build for production:

```bash
npm run build
```

This creates an optimized build in the `/dist` directory with:
- Minified CSS
- Optimized HTML
- All assets copied

## Deployment

### Option 1: Vercel (Recommended)

1. Install Vercel CLI (optional):
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

   Or connect your GitHub repo to Vercel for automatic deployments.

3. Vercel will automatically:
   - Run `npm run build`
   - Deploy the `/dist` directory
   - Set up HTTPS and CDN
   - Apply cache headers for fonts and assets

### Option 2: Manual Deployment

Deploy the contents of the `/dist` directory to your web server.

## Customization

### Replace Hero Image

Replace `/assets/hero.jpg` with your own product image:
- Keep the image under 200 KB for optimal performance
- Recommended dimensions: 800x1000px or similar aspect ratio
- Use JPG or WebP format
- Compress for web use

### Update Contact Email

The contact button uses the email: `sala@safnasafna.is`

To change it, edit `src/index.html` and update the `mailto:` link.

## Project Structure

```
/
├── src/
│   ├── index.html       # Main HTML file
│   ├── styles.css       # Tailwind CSS with custom fonts
│   └── fonts/           # Self-hosted Inter fonts (WOFF2)
├── assets/
│   ├── hero.jpg         # Product image
│   ├── favicon.ico      # Site favicon
│   └── og-image.jpg     # Social media preview image
├── dist/                # Build output (generated)
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies and scripts
```

## Performance

The site is optimized for:
- Lighthouse scores 95+ in all categories
- Self-hosted fonts with font-display: swap
- Preloaded critical assets
- Minified CSS
- Semantic HTML with proper accessibility
- No cumulative layout shift (CLS)

## Browser Support

Modern browsers with ES6+ support.
