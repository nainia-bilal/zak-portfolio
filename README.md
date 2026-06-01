# Zakaria Boubkeraoui — Portfolio

A premium, cinematic, multilingual portfolio website built with React + Vite. Dark luxury aesthetic with custom cursor, particle effects, glassmorphism, and scroll-triggered animations.

---

## ✨ Tech Stack

- **React 18** + **Vite 5**
- **Framer Motion** — page transitions & animations
- **Custom CSS** — glassmorphism, glow effects, animations
- **Google Fonts** — Syne (display) + DM Sans (body) + Space Mono
- Multilingual: English / French / Arabic (with RTL)

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

---

## 🌐 Deploy to Vercel

1. Push project to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework Preset: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy** ✓

---

## 📁 Folder Structure

```
zakaria-portfolio/
├── public/
│   ├── images/
│   │   ├── zakaria-profile.jpg   ← Profile photo (Hero + About)
│   │   ├── logo.png              ← Logo image
│   │   └── projects/             ← Project thumbnails
│   │       ├── project-1.jpg
│   │       ├── project-2.jpg
│   │       └── ...
│   └── cv/
│       └── zakaria-cv.pdf        ← Downloadable CV
│
├── src/
│   ├── components/               ← All page sections & UI components
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Cursor.jsx
│   │   ├── Particles.jsx
│   │   ├── Marquee.jsx
│   │   └── AnimatedText.jsx
│   │
│   ├── data/
│   │   └── projects.js           ← ✏️ Edit projects here
│   │
│   ├── locales/
│   │   └── translations.js       ← ✏️ Edit all text here
│   │
│   ├── hooks/
│   │   └── useLang.js            ← Language state & context
│   │
│   ├── styles/
│   │   └── globals.css           ← All global styles & design tokens
│   │
│   ├── App.jsx                   ← Root component
│   └── main.jsx                  ← Entry point
│
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🖼️ How to Add / Change Images

### Change Profile Photo
1. Prepare your photo (recommended: 800×1000px, JPG/WebP)
2. Rename it `zakaria-profile.jpg`
3. Place it in `/public/images/zakaria-profile.jpg`
4. The hero section will show it automatically

### Change Logo
1. Prepare your logo (recommended: PNG with transparent background, ~200×80px)
2. Rename it `logo.png`
3. Place it in `/public/images/logo.png`

### Add Project Thumbnails
1. Prepare image (recommended: 800×500px, JPG/WebP)
2. Place it in `/public/images/projects/`
3. Reference it in `src/data/projects.js` as `/images/projects/your-file.jpg`

---

## ➕ How to Add New Projects

Open `src/data/projects.js` and add a new object to the array:

```js
{
  id: 7,                          // Unique number
  title: "My New Project",        // Project title
  category: "Video Editing",      // One of: "Video Editing" | "Design" | "Presentations" | "Personal Branding"
  description: "Short description of the project and what it involved.",
  thumbnail: "/images/projects/project-7.jpg",  // Path to image in /public/
  tools: ["CapCut", "Canva"],     // Tools used
  year: "2024",
}
```

**Available categories:** `Video Editing`, `Design`, `Presentations`, `Personal Branding`

---

## ✏️ How to Change Text

All website text is in `src/locales/translations.js`.

The file is organized by language (`en`, `fr`, `ar`) and section:

```js
en: {
  hero: {
    title1: "Junior Digital",   // ← Change hero title here
    desc:   "Hi, I'm Zakaria...", // ← Change hero description
    ...
  },
  about: {
    bio: "My name is Zakaria...", // ← Change bio here
    ...
  },
  ...
}
```

To change the **About bio**: edit `about.bio` in each language block.
To change **service descriptions**: edit `services.items[].desc`.

---

## 🌐 How to Edit Translations

The translations file (`src/locales/translations.js`) contains three language blocks:
- `en` — English
- `fr` — French  
- `ar` — Arabic

**To add text for Arabic RTL:**
- Edit the `ar:` section
- RTL layout is applied automatically when Arabic is selected

**To add a new language:**
1. Add a new key to `translations.js` (e.g. `es: { ... }`)
2. Add a button in `src/components/Navbar.jsx` lang-switcher
3. Handle it in `src/hooks/useLang.js`

---

## 🎥 How to Add Videos

Videos aren't rendered inline by default, but you can:
1. Place video files in `/public/videos/`
2. In a project card, replace the `<img>` with a `<video>` tag
3. Or link to YouTube/Vimeo in the project description

---

## 📋 Downloadable CV

1. Export your CV as a PDF
2. Rename it `zakaria-cv.pdf`
3. Place it at `/public/cv/zakaria-cv.pdf`
4. The Download CV button will work automatically

---

## 🎨 Changing Colors / Theme

Open `src/styles/globals.css` and edit the `:root` variables:

```css
:root {
  --purple:       #8b5cf6;   /* Main purple accent */
  --purple-bright:#a78bfa;   /* Bright purple (glows, highlights) */
  --red:          #be123c;   /* Red accent */
  --red-bright:   #f43f5e;   /* Bright red */
}
```

---

## 📞 Changing Contact / Social Links

Edit `src/components/ContactSection.jsx`:

```js
const SOCIAL = [
  { href: 'https://www.linkedin.com/in/YOUR-PROFILE', ... },
  { href: 'https://www.instagram.com/YOUR-HANDLE', ... },
  { href: 'mailto:YOUR@EMAIL.com', ... },
];
```

---

## 🏗️ Adding New Sections

1. Create `src/components/NewSection.jsx`
2. Import it in `src/App.jsx`
3. Add `<NewSection />` to the JSX
4. Add the section `id` to the `SECTIONS` array in `App.jsx`
5. Add nav link text to `src/locales/translations.js`

---

## 📦 npm Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server on localhost:5173 |
| `npm run build` | Build for production (outputs to `/dist`) |
| `npm run preview` | Preview production build locally |

---

Made with ♥ by Zakaria Boubkeraoui
