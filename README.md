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
- `amani cindege michel profile picture.JPG` — original photo, kept for reference
- `.gitignore`

## Replacing profile-3d.png

The hero loads `profile-3d.png` and expects a **transparent background**.
A photo with a white background will look wrong, because the page draws a
drop shadow and a blurred layer behind the cut-out.

If `profile-3d.png` is missing or fails to load, the page falls back to a grey
silhouette placeholder with the text "Add profile-3d.png" — the site never
breaks, it just loses the portrait.

To replace it:

1. Put your new photo in this folder.
2. Remove the background:

   ```bash
   pip install "rembg[cpu]"
   rembg i "your-photo.jpg" profile-3d.png
   ```

3. Crop the result to head and shoulders, with the bottom edge cut straight
   across at the shoulders, so the image sits correctly on the "floor" shadow.
4. Overwrite `profile-3d.png`.

Keep the proportions roughly square and the subject centred — the CSS scales
the image to the height of the stage.

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