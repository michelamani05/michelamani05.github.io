# Professional Portfolio - AMANI CINDEGE Michel

A single-page portfolio for AMANI CINDEGE Michel, a Software Engineering
graduate of the Adventist University of Central Africa (AUCA, 2025).

The site is a bold, editorial design: an oversized outlined name behind a
3D cut-out portrait, black-and-white line illustrations in place of stock
images, and full-screen wipe transitions between sections.

## Sections

- **Home** — hero with the outlined name, the 3D portrait, a short pitch and
  quick links to LinkedIn, GitHub, email and phone.
- **About** — biography plus key facts (graduation year, certifications,
  languages, projects shipped).
- **Selected work** — seven projects, each with a line-illustration thumbnail,
  a description, feature bullets and technology tags.
- **Skills** — five categories: frontend, backend, database, cloud &
  deployment, and network & tools.
- **Education** — the AUCA degree and the two Cisco certifications.
- **Contact** — email, LinkedIn, GitHub and both phone numbers, plus a large
  "Let's build something together" call to action.

## Design features

- **Light / dark mode** — the moon button in the nav switches theme. Colours are
  driven entirely by CSS custom properties on `:root`, with a
  `[data-theme="dark"]` block that re-points them, so both themes share one
  set of rules. A small script in `<head>` applies the stored theme before the
  first paint, so there is no flash of the wrong mode. New visitors get their
  operating system setting via `prefers-color-scheme`; the choice is saved to
  `localStorage` under `theme` and takes precedence over the OS from then on.
  `color-scheme` is set too, so form controls and scrollbars match.
- **English / French** — the two flags in the nav (USA and France, both drawn as
  inline SVG so the language switch never depends on emoji fonts) switch the
  whole page. Every string lives in `i18n.js`, keyed by the `data-i18n`
  attributes in `index.html`; the English wording also stays in the HTML as a
  fallback, so the page still reads correctly if the script never runs. A small
  script in `<head>` picks the language before the first paint — `?lang=fr` in
  the URL wins, then the saved choice, then the browser language — and the
  choice is written back to the URL, so a link can be shared in either
  language. The transition scenes and the theme-button wording come from the
  same dictionary, so nothing is left in English when French is active.
- **3-second menu transition** — clicking any menu item (or an in-page link)
  plays a full-screen overlay: two clip-path layers wipe in, a line
  illustration draws itself, the section title fades in, and a progress bar
  fills. The page scrolls to the target underneath the overlay, which then
  wipes away. Implemented in `script.js` with the `SCENES` map and the
  `#pt` overlay; respect for `prefers-reduced-motion` skips it.
- **Line illustrations** — all artwork is inline SVG, defined once in the
  `ILL` object at the top of `script.js` and injected into any element with a
  `data-ill` attribute. They animate with a stroke-dash "drawing" effect when
  scrolled into view.
- **Responsive layout** — breakpoints at 1180px, 1024px, 760px and 480px, plus
  a landscape-phone rule. On tablet and phone the inline menu collapses into a
  ☰ burger button and the hero stacks vertically.
- **3D portrait** — the photo is placed in a perspective container with a
  blurred "ghost" layer behind it, a soft floor shadow, and a subtle tilt that
  follows the mouse (or device orientation on mobile).
- **Fast first paint** — a cold load is **7 requests, 272 KB, all from this one
  origin**: both scripts are deferred, the icons are an inline SVG sprite
  (15 Font Awesome Free 6.4.0 paths, CC BY 4.0) instead of an icon font, the
  Archivo variable font is self-hosted and preloaded, and the portrait is one
  96 KB WebP shared by the photo and its blurred ghost layer, with the PNG kept
  as the `<picture>` fallback. There is no request to Google Fonts or any CDN,
  so no extra DNS/TLS handshake stands between the visitor and the first paint.
  Measured locally on a cold load: FCP 1296 ms → **260 ms**, load 1989 ms →
  **174 ms**.
- **Fitting name** — the hero name is measured with JavaScript on load and on
  resize so it always fits the viewport width.

## Files

- `index.html` — page structure
- `styles.css` — all styling
- `script.js` — all behaviour and the line illustrations
- `i18n.js` — every string on the page, in English and French
- `profile-3d.png` — the portrait, **with a transparent background** (781×1000)
- `profile-3d.webp` — the same portrait as WebP, served first via `<picture>`
- `favicon-32.png`, `favicon-180.png` — the tab icon and the touch icon
- `archivo-var-latin.woff2` — the self-hosted Archivo variable font
- `newprofileimage.png` — source artwork for the current portrait
- `amani cindege michel profile picture.JPG` — original photo, kept for reference
- `.gitignore`

## Replacing profile-3d.png

The hero loads `profile-3d.png` and expects a **transparent background**.
A photo with a white background will look wrong, because the page draws a
drop shadow and a blurred layer behind the image.

If `profile-3d.png` is missing or fails to load, the page falls back to a grey
silhouette placeholder with the text "Add profile-3d.png" — the site never
breaks, it just loses the portrait.

The current portrait keeps its own original shape exactly as drawn. Only the flat
light-grey field around it is made transparent — no circular mask, no rim, no
border is applied by CSS, so the subject's true silhouette is preserved.

To replace it:

1. Put your new photo in this folder.
2. Make the background transparent. For a flat single-colour field:

   ```bash
   pip install pillow numpy
   ```

   then threshold the background, keep the largest dark region, fit a circle to
   the band above the shoulders (the shoulders themselves spill past the badge,
   so a full-silhouette bounding box would just return the whole frame), and
   apply an antialiased circular mask.

   For a full-body photo instead, use:

   ```bash
   pip install "rembg[cpu]"
   rembg i "your-photo.jpg" profile-3d.png
   ```

3. Export at most 1000 px tall, roughly square and centred — the current
   portrait is 781×1000 — and the CSS scales the image to fit the stage with
   `object-fit: contain`.
4. Overwrite `profile-3d.png`.
5. Save a WebP copy as `profile-3d.webp` at about quality 88 (Pillow:
   `im.save('profile-3d.webp', quality=88, method=6)`). That is the file browsers
   actually download; the PNG is only the `<picture>` fallback.

## Translating the page

All copy lives in `i18n.js` as two flat objects, `I18N.en` and `I18N.fr`. To
change or add a string: give the element in `index.html` a `data-i18n="key"`
attribute, then add that key to both objects. For an attribute instead of text,
use `data-i18n-attr="aria-label:key"` (separate several with `|`) — that is how
the nav, the language switch, the burger button, the theme button and the
footer social links are translated.

Wording that lives in `script.js` — the six transition scenes and the theme
button label — is read from the same dictionary through `window.i18n.t(key)` and
re-painted when a `langchange` event fires. The switcher is `#lang` in the nav:
one button per language with `data-lang="en|fr"`, and the styling fills in
whichever one has `aria-pressed="true"`. Adding a third language means adding a
code to `LANGS` in `i18n.js`, a third object, and a third button.

`?lang=en` or `?lang=fr` in the URL forces a language and is saved, so
`https://michelamani05.github.io/?lang=fr` is a ready-made French link.

## Run it locally

```bash
python -m http.server 8000
```

Then open <http://127.0.0.1:8000/>.

## Technologies Used

- HTML5
- CSS3 (custom properties, clip-path, grid, flexbox, `svh` units)
- JavaScript (ES6, IntersectionObserver, matchMedia)
- Archivo variable font — self-hosted latin subset (from Google Fonts)
- Font Awesome Free 6.4.0 icon paths, inlined as an SVG sprite
- [rembg](https://github.com/danielgatis/rembg) for the background removal

## Performance

Cold, cache-disabled load of the built page (Chrome; measured locally, so the
gzip/Brotli that GitHub Pages applies to HTML, CSS and JS is not counted):

| | before | now |
| --- | --- | --- |
| transferred | 2531 KB | **272 KB** |
| requests | 12 from 4 origins | **7 from 1 origin** |
| first contentful paint | 1296 ms | **260 ms** |
| DOMContentLoaded | 1293 ms | **172 ms** |
| load | 1989 ms | **174 ms** |

What did it:

- **Icons inline** — the 15 Font Awesome icons the page uses are an SVG sprite
  in the HTML (`<symbol>` + `<use>`), so nothing downloads a 272 KB icon-font
  setup from a CDN.
- **Font self-hosted** — `archivo-var-latin.woff2` (88 KB, variable width and
  weight, latin subset) is served from this origin and preloaded, replacing two
  `preconnect`s plus a blocking CSS request to Google.
- **One portrait file** — both the photo and its ghost layer use the 96 KB WebP;
  the 887 KB PNG is only fetched by browsers without WebP.
- **Small favicon** — a 3 KB `favicon-32.png` replaces the old 1.1 MB PNG, which
  every browser was downloading for the tab icon.
- **Deferred scripts** — the HTML and CSS parse and paint before any JavaScript
  runs, with the `hidden` attribute on the non-home sections so nothing stacks up
  while the scripts load.

Three things to know about GitHub Pages:

- Pages sends `Cache-Control: max-age=600`, so repeat visits re-validate every
  file after ten minutes. Putting Cloudflare in front (which also adds HTTP/3,
  Brotli and long-lived caching) is what makes repeat visits instant.
- Everything in the repo is published, though only referenced files are
  downloaded. The unreferenced source artwork (`newprofileimage.PNG`,
  `amani cindege profile new added.PNG`, `amani cindege michel profile
  picture.JPG`, `profile-3d-old.png`) is never fetched by the page — remove it
  from the repo if the published size ever matters.
- Opening `index.html` straight from disk (`file://`) falls back to the system
  font, because browsers block font files loaded from `file://`. Use
  `python -m http.server` (below) or the live site.

## Deployment

The site is already published with GitHub Pages from this repository:
<https://michelamani05.github.io>

To publish an update, push to `main`; GitHub Pages rebuilds automatically.
You can also drop the folder on Netlify or Vercel.

## Contact

For inquiries about this portfolio or to contact AMANI CINDEGE Michel:
- Email: michelamani151@gmail.com
- LinkedIn: linkedin.com/in/michel-cindege-a37742275
- GitHub: github.com/michelamani05
- Phone (Airtel DRC): +243996748364
- Phone (MTN): +250791447517