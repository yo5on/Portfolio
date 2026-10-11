# YO5ON — Portfolio

**Small, sharp tools over big, vague ideas.**

The personal portfolio of Yo5on, a CSE student specializing in AI / ML, with work across AI systems, ESP32 robotics, embedded builds and game development.

## Design

An editorial, art-magazine layout built entirely in 2D:

- **Palette** — midnight navy `#1B1E4A`, warm stone `#AFAEA2`, crimson `#D21319`. Crimson display text uses a fractionally brighter `#DA1E24` so it meets the 3:1 contrast minimum for large text on navy; ribbons and rules keep `#D21319`.
- **Type** — three faces, each with one job:
  - **Anton** for hero statements and large project titles: the hero headline, the contact statement, project titles on the cards, in the index and in project views, and the mobile menu. One weight, never synthesised bold or italic.
  - **Azeret Mono** for the interface: section headings, labels, tags, navigation, metadata, links and running text.
  - **JetBrains Mono** only for technical detail: case-study stacks, figure and video notes, labels inside the drawn plates, and the handwritten margin annotations.
- **Handwritten words** — the contact title's *something.* (in Anton) and the margin notes under three project figures (in JetBrains Mono Italic) trace themselves in the same face as the text around them, then ink in (`src/components/ui/handwriting-text.tsx`, used through `src/components/InkWord.jsx`). The words stay in the page as text for screen readers and search; with reduced motion they appear already drawn, and if the glyph library can’t load they show as ordinary text.
- **Icons** — arrows and the close mark are inline SVG (`src/components/Icons.jsx`) rather than Unicode characters, which some platforms render as colour emoji.
- **Hero** — a pale engraved moth, presented like a natural-history specimen, wrapped in crimson silk ribbons drawn as SVG and layered both behind and in front of it.
- **Motion** — restrained: text reveals, a slow float on the moth, a gentle drift on the ribbons and scroll-linked parallax. Transform/layout motion and CSS animations are reduced for visitors who prefer reduced motion; short opacity transitions may remain.

## Sections

- **Hero** — headline, short introduction and specimen-style labels.
- **Selected work** — six projects laid out as magazine spreads, each with a photo or a line-drawn plate, opening into a full-screen case view, followed by a compact index of works linking to the same views. Each case view has its own link (`#work/<id>`, e.g. `#work/daymark`), and the browser's Back button closes it.
- **About** (including the degree), **Practice** (three areas of practice, each with its focus and links to the projects that show it), **Contact**.

### Projects featured

| Project | Repository |
| --- | --- |
| Line Follower | [yo5on/line-follower](https://github.com/yo5on/line-follower) |
| FakeGuard — social-media account risk analyzer | [yo5on/fakeguard](https://github.com/yo5on/fakeguard) |
| Daymark — personalised study planner | [yo5on/Personalised-study-planner](https://github.com/yo5on/Personalised-study-planner) |
| Robotic Arm | [yo5on/Robotic-arm](https://github.com/yo5on/Robotic-arm) |
| Maze Runner — Unity 2D platformer | [yo5on/maze-runner](https://github.com/yo5on/maze-runner) |
| Mochi | [yo5on/oled-project](https://github.com/yo5on/oled-project) |

## Tech stack

- [React](https://react.dev) 19
- [Vite](https://vite.dev) 6
- [Motion](https://motion.dev) 12 for interface animation

Everything visual is HTML, CSS, SVG and images — there is no 3D or WebGL.

## Getting started

Requires Node.js 22.12+ (recommended: a supported Node.js LTS release). Vite 6 supports Node.js 18, 20 and 22+, but Node.js 18 and 20 are now end-of-life.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

### Social preview URLs

Open Graph and X/Twitter cards need absolute URLs. Set `SITE_URL` to the deployed origin when building:

**Windows PowerShell**

```powershell
$env:SITE_URL = "https://your-domain.example"
npm run build
Remove-Item Env:SITE_URL
```

**macOS / Linux**

```bash
SITE_URL=https://your-domain.example npm run build
```

This makes the preview image URLs absolute and adds `og:url` and a canonical link. Without it the build still works, but image paths stay relative. Vercel also supplies `VERCEL_PROJECT_PRODUCTION_URL` during builds, which this project uses when `SITE_URL` is not set.

## Project structure

```
public/
  favicon.svg
  images/            moth artwork, social preview, project photos (work/)
src/
  components/        Hero, Ribbons, Nav, Work, Plate, CaseView, Sections
  data/content.js    project and section copy
  styles.css         design tokens and layout
  main.jsx
```

## Credits

- **Moth artwork** — a custom illustration supplied by the site owner (`Symmetrical Grayscale Moth Cutout.png`). `public/images/moth.webp` (1536 px), `moth-900.webp` (900 px, for phones and standard-density screens) and the `moth.png` fallback (256-colour) are trimmed and compressed copies of it.
- **Project photos and screenshots** (`public/images/work/`, `public/images/work/gallery/`) — taken from the README images of the owner's own repositories (Daymark, line-follower, Robotic-arm and oled-project (Mochi)), except the FakeGuard screenshots, which were captured from its live demo using synthetic input. Daymark screenshots are cropped to the app. The Maze Runner cover, poster and gameplay video (`public/media/`) come from the owner's Level 1 recording; the cover is one frame cropped to the game view.
- **Line-drawn project plates**, **crimson ribbons** and **favicon** — SVG drawn in code for this site (`src/components/Plate.jsx`, `src/components/Ribbons.jsx`, `public/favicon.svg`).
- **Social preview image** (`public/images/og-preview.jpg`) — a render of this site's own hero.
- **Handwriting component** — adapted from a 21st.dev component. Glyph outlines are parsed at runtime by [opentype.js](https://opentype.js.org/) 1.3.4 (MIT), loaded from jsDelivr. `public/fonts/Anton-Regular-latin.woff` and `public/fonts/JetBrainsMono-Italic-latin.woff` are the Latin builds from [Fontsource](https://fontsource.org/) 5.3.0, redistributed under the SIL Open Font License (`public/fonts/OFL-Anton.txt`, `public/fonts/OFL-JetBrainsMono.txt`).
- **Fonts** — [Anton](https://fonts.google.com/specimen/Anton), [Azeret Mono](https://fonts.google.com/specimen/Azeret+Mono) and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono), served by Google Fonts under the SIL Open Font License.

## Contact

- Email: yo5on2025@gmail.com
- GitHub: [github.com/yo5on](https://github.com/yo5on)
- LinkedIn: [linkedin.com/in/yo5on](https://www.linkedin.com/in/yo5on)
