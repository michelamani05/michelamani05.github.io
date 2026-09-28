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
- **Fitting name** — the hero name is measured with JavaScript on load and on
  resize so it always fits the viewport width.

## Files

- `index.html` — page structure
- `styles.css` — all styling
- `script.js` — all behaviour and the line illustrations
- `profile-3d.png` — the portrait, **with a transparent background**
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

3. Export at 924×924, roughly square and centred — the CSS scales the image to
   fit the stage with `object-fit: contain`.
4. Overwrite `profile-3d.png`.

## Run it locally

```bash
python -m http.server 8000
```

Then open <http://127.0.0.1:8000/>.

## Technologies Used

- HTML5
- CSS3 (custom properties, clip-path, grid, flexbox, `svh` units)
- JavaScript (ES6, IntersectionObserver, matchMedia)
- Google Fonts (Archivo) and Font Awesome 6.4.0
- [rembg](https://github.com/danielgatis/rembg) for the background removal

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