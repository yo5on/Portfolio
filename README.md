# YO5ON — Portfolio

**Small, sharp tools over big, vague ideas.**

The personal portfolio of Yo5on, a CSE student specializing in AI / ML, with work across AI systems, ESP32 robotics, embedded builds and game development.

## Design

An editorial, art-magazine layout built entirely in 2D:

- **Palette** — midnight navy `#1B1E4A`, warm stone `#AFAEA2`, crimson `#D21319`. Crimson display text uses a fractionally brighter `#DA1E24` so it meets the 3:1 contrast minimum for large text on navy; ribbons and rules keep `#D21319`.
- **Type** — three faces, each with one job:
  - **Instrument Serif** for editorial headlines (crimson capitals with stone italics), the logo, and short italic lines such as project introductions and section notes.
  - **Instrument Sans** for longer body copy (the About paragraph, project-view descriptions) and action links such as *Open study* and *Explore the work*.
  - **JetBrains Mono** for technical labels and metadata: navigation, section and project numbers, categories, technology tags, figure captions, dates, the footer, and the hero introduction.
- **Icons** — arrows and the close mark are inline SVG (`src/components/Icons.jsx`) rather than Unicode characters, which some platforms render as colour emoji.
- **Hero** — a pale engraved moth, presented like a natural-history specimen, wrapped in crimson silk ribbons drawn as SVG and layered both behind and in front of it.
- **Motion** — restrained: text reveals, a slow float on the moth, a gentle drift on the ribbons and scroll-linked parallax. Transform/layout motion and CSS animations are reduced for visitors who prefer reduced motion; short opacity transitions may remain.

## Sections

- **Hero** — headline, short introduction and specimen-style labels.
- **Selected work** — seven projects laid out as magazine spreads, each with a photo or a line-drawn plate, opening into a full-screen case view. Each case view has its own link (`#work/<id>`, e.g. `#work/daymark`), and the browser's Back button closes it.
- **About**, **Skills**, **Education & practice**, **Contact**.

### Projects featured

| Project | Repository |
| --- | --- |
| FakeGuard — social-media account risk analyzer | [yo5on/fakeguard](https://github.com/yo5on/fakeguard) |
| Daymark — personalised study planner | [yo5on/Personalised-study-planner](https://github.com/yo5on/Personalised-study-planner) |
| Agentic AI Pest Monitoring | [yo5on/Agentic-AI-Pest-Monitoring](https://github.com/yo5on/Agentic-AI-Pest-Monitoring) |
| ESP32 Line Follower | [yo5on/line-follower](https://github.com/yo5on/line-follower) |
| Robotic Arm | [yo5on/Robotic-arm](https://github.com/yo5on/Robotic-arm) |
| Mochi · OLED Companion | [yo5on/oled-project](https://github.com/yo5on/oled-project) |
| Maze Runner — Unity 2D platformer | [yo5on/maze-runner](https://github.com/yo5on/maze-runner) |

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
- **Project photos and screenshots** (`public/images/work/`) — taken from the README images of the owner's own repositories: Daymark, line-follower, Robotic-arm and oled-project (Mochi).
- **Line-drawn project plates**, **crimson ribbons** and **favicon** — SVG drawn in code for this site (`src/components/Plate.jsx`, `src/components/Ribbons.jsx`, `public/favicon.svg`).
- **Social preview image** (`public/images/og-preview.jpg`) — a render of this site's own hero.
- **Fonts** — [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif), [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans) and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono), served by Google Fonts under the SIL Open Font License.

## Contact

- Email: yo5on2025@gmail.com
- GitHub: [github.com/yo5on](https://github.com/yo5on)
- LinkedIn: [linkedin.com/in/yo5on](https://www.linkedin.com/in/yo5on)
