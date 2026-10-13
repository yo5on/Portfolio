<div align="center">

<samp><b>YO5ON — PERSONAL PORTFOLIO</b></samp>

<samp>react · vite · motion · javascript · css · svg</samp>

</div>

---

<div align="center"><samp>The personal portfolio of Yoson, a CSE student specializing in AI / ML, with hands-on work across ESP32 robotics, embedded builds, full-stack software and game development.</samp></div>

---

<div align="center">
<samp><b>Design</b></samp>
</div>

<samp>An editorial, art-magazine layout built entirely in 2D.</samp>

- <samp><b>Palette</b> — midnight navy `#1B1E4A`, warm stone `#AFAEA2`, crimson `#D21319`. Crimson display text uses a fractionally brighter `#DA1E24` so it meets the 3:1 contrast minimum for large text on navy; ribbons and rules keep `#D21319`.</samp>
- <samp><b>Type</b> — three faces, each with one job:</samp>
  - <samp><b>Instrument Serif</b> for display: the hero headline, the contact statement, project titles on the cards, in the index and in project views, and the mobile menu: crimson capitals, with its italic kept for the stone accent words.</samp>
  - <samp><b>Instrument Sans</b> for the interface and reading text: section headings, labels, tags, navigation, buttons, metadata, links and running text.</samp>
  - <samp><b>IBM Plex Mono</b> only for technical detail: case-study stacks, figure and video notes, labels inside the drawn plates, and the handwritten margin annotations.</samp>
- <samp><b>Handwritten words</b> — the contact title's *something.* (in Instrument Serif Italic) and the margin notes under three project figures (in IBM Plex Mono Italic) trace themselves in the same face as the text around them, then ink in (`src/components/ui/handwriting-text.tsx`, used through `src/components/InkWord.jsx`). The words stay in the page as text for screen readers and search; with reduced motion they appear already drawn, and if the glyph library can’t load they show as ordinary text.</samp>
- <samp><b>Icons</b> — arrows and the close mark are inline SVG (`src/components/Icons.jsx`) rather than Unicode characters, which some platforms render as colour emoji.</samp>
- <samp><b>Hero</b> — a pale engraved moth, presented like a natural-history specimen, wrapped in crimson silk ribbons drawn as SVG and layered both behind and in front of it.</samp>
- <samp><b>Motion</b> — restrained: text reveals, a slow float on the moth, a gentle drift on the ribbons and scroll-linked parallax. Transform/layout motion and CSS animations are reduced for visitors who prefer reduced motion; short opacity transitions may remain.</samp>

---

<div align="center">
<samp><b>Sections</b></samp>
</div>

- <samp><b>Hero</b> — headline, short introduction and specimen-style labels.</samp>
- <samp><b>Selected work</b> — six projects laid out as magazine spreads, each with a photo or a line-drawn plate, opening into a full-screen case view, followed by a compact index of works linking to the same views. Each case view has its own link (`#work/<id>`, e.g. `#work/daymark`), and the browser's Back button closes it.</samp>
- <samp><b>About</b> (including the degree), <b>Practice</b> (three areas of practice, each with its focus and links to the projects that show it), <b>Contact</b>.</samp>

---

<div align="center">
<samp><b>Projects Featured</b></samp>
</div>

<table align="center">
<tr><th><samp>Project</samp></th><th><samp>Repository</samp></th></tr>
<tr><td><samp>Line Follower</samp></td><td><a href="https://github.com/yo5on/line-follower"><samp>yo5on/line-follower</samp></a></td></tr>
<tr><td><samp>FakeGuard — social-media account risk analyzer</samp></td><td><a href="https://github.com/yo5on/fakeguard"><samp>yo5on/fakeguard</samp></a></td></tr>
<tr><td><samp>Daymark — personalised study planner</samp></td><td><a href="https://github.com/yo5on/Personalised-study-planner"><samp>yo5on/Personalised-study-planner</samp></a></td></tr>
<tr><td><samp>Robotic Arm</samp></td><td><a href="https://github.com/yo5on/Robotic-arm"><samp>yo5on/Robotic-arm</samp></a></td></tr>
<tr><td><samp>Maze Runner — Unity 2D platformer</samp></td><td><a href="https://github.com/yo5on/maze-runner"><samp>yo5on/maze-runner</samp></a></td></tr>
<tr><td><samp>Sparky</samp></td><td><a href="https://github.com/yo5on/oled-project"><samp>yo5on/oled-project</samp></a></td></tr>
</table>

---

<div align="center">
<samp><b>Tech Stack</b></samp>
</div>

<table align="center">
<tr><th><samp>Technology</samp></th><th><samp>Role</samp></th></tr>
<tr><td><samp>React 19</samp></td><td><samp>Interface components</samp></td></tr>
<tr><td><samp>Vite 6</samp></td><td><samp>Development server and production build</samp></td></tr>
<tr><td><samp>Motion 12</samp></td><td><samp>Interface animation</samp></td></tr>
<tr><td><samp>HTML · CSS · SVG</samp></td><td><samp>Layout, styling and artwork</samp></td></tr>
</table>

<div align="center"><samp>Everything visual is HTML, CSS, SVG and images — there is no 3D or WebGL.</samp></div>

---

<div align="center">
<samp><b>Getting Started</b></samp>
</div>

<samp>Requires Node.js 22.12+ (recommended: a supported Node.js LTS release). Vite 6 supports Node.js 18, 20 and 22+, but Node.js 18 and 20 are now end-of-life.</samp>

<samp><b>Clone the repository</b></samp>

```bash
git clone https://github.com/yo5on/Portfolio.git
cd Portfolio
```

<samp><b>Install and run</b></samp>

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

---

<div align="center">
<samp><b>Social Preview URLs</b></samp>
</div>

<samp>Open Graph and X/Twitter cards need absolute URLs. Set `SITE_URL` to the deployed origin when building.</samp>

<samp><b>Windows PowerShell</b></samp>

```powershell
$env:SITE_URL = "https://your-domain.example"
npm run build
Remove-Item Env:SITE_URL
```

<samp><b>macOS / Linux</b></samp>

```bash
SITE_URL=https://your-domain.example npm run build
```

<samp>This makes the preview image URLs absolute and adds `og:url` and a canonical link. Without it the build still works, but image paths stay relative. Vercel also supplies `VERCEL_PROJECT_PRODUCTION_URL` during builds, which this project uses when `SITE_URL` is not set.</samp>

---

<div align="center">
<samp><b>Project Structure</b></samp>
</div>

```text
public/
  certificates/      certificate PDFs shown in the Certificates section (copies from yo5on/Certificates, metadata removed)
  fonts/             Instrument Serif Italic and IBM Plex Mono Italic (traced by the handwriting)
  favicon.ico        fallback favicon, rendered from images/moth-flow-favicon.svg
  images/            moth artwork and "The Flow" mark + favicon, social preview, project photos (work/)
src/
  components/        Hero, Ribbons, Nav, Work, Plate, CaseView, Sections
  data/content.js    project and section copy
  styles.css         design tokens and layout
  main.jsx
```

---

<div align="center">
<samp><b>Credits</b></samp>
</div>

- <samp><b>Moth artwork</b> — a custom illustration supplied by the site owner (`Symmetrical Grayscale Moth Cutout.png`). `public/images/moth.webp` (1536 px), `moth-900.webp` (900 px, for phones and standard-density screens) and the `moth.png` fallback (256-colour) are trimmed and compressed copies of it.</samp>
- <samp><b>Project photos and screenshots</b> (`public/images/work/`, `public/images/work/gallery/`) — taken from the README images of the owner's own repositories: Daymark, line-follower, Robotic-arm and oled-project (Sparky), except the FakeGuard screenshots, which were captured from its live demo using synthetic input. Daymark screenshots are cropped to the app. The Maze Runner cover, poster and gameplay video (`public/media/`) come from the owner's Level 1 recording; the cover is one frame cropped to the game view.</samp>
- <samp><b>Line-drawn project plates and crimson ribbons</b> — SVG drawn in code for this site (`src/components/Plate.jsx`, `src/components/Ribbons.jsx`).</samp>
- <samp><b>Moth mark ("The Flow")</b> — traced and redrawn as vector from the owner's reference artwork: the ivory-and-crimson mark beside the wordmark in the nav and footer (inline in `src/components/Icons.jsx`, and in the social preview), the same mark at tab size as the favicon `public/images/moth-flow-favicon.svg` (warm-ivory wings with a navy edge, crimson ribbon, transparent background) with `public/favicon.ico` rendered from it, and a black-and-white master `public/images/moth-flow.svg`.</samp>
- <samp><b>Social preview image</b> (`public/images/og-preview.jpg`) — a render of this site's own hero.</samp>
- <samp><b>Handwriting component</b> — adapted from a 21st.dev component. Glyph outlines are parsed at runtime by [opentype.js](https://opentype.js.org/) 1.3.4 (MIT), loaded from jsDelivr. `public/fonts/InstrumentSerif-Italic-latin.ttf` is a Latin subset of Instrument Serif Italic and `public/fonts/IBMPlexMono-Italic-latin.woff` the Latin build from [Fontsource](https://fontsource.org/) 5.2.7, both redistributed under the SIL Open Font License (`public/fonts/OFL-InstrumentSerif.txt`, `public/fonts/OFL-IBMPlexMono.txt`).</samp>
- <samp><b>Fonts</b> — [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif), [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans) and [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono), served by Google Fonts under the SIL Open Font License.</samp>

---

<div align="center">
<samp><b>Contact</b></samp>
</div>

<div align="center">

<samp>Email: <a href="mailto:yo5on2025@gmail.com">yo5on2025@gmail.com</a></samp>

<samp>GitHub: <a href="https://github.com/yo5on">github.com/yo5on</a></samp>

<samp>LinkedIn: <a href="https://www.linkedin.com/in/yo5on">linkedin.com/in/yo5on</a></samp>

</div>
