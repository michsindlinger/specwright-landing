# Specwright Landing Page

Landing page for [specwright.app](https://specwright.app)

## Tech Stack

- **HTML5** – Semantic markup
- **Tailwind CSS** – Via CDN (zero build step)
- **Vanilla JS** – Minimal interactivity

## Structure

```
specwright-landing/
├── index.html          # Main landing page
├── assets/
│   ├── css/
│   │   └── custom.css  # Additional styles
│   ├── js/
│   │   └── main.js     # Mobile menu & form handling
│   └── images/         # Logo, favicon, etc.
└── README.md
```

## Development

Just open `index.html` in a browser. No build step required.

For local development with live reload:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

## Deployment

Works out of the box with:
- GitHub Pages
- Cloudflare Pages
- Netlify
- Vercel

## TODO

- [ ] Add favicon
- [ ] Add Open Graph images
- [ ] Connect email form to backend
- [ ] Add analytics
