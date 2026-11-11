# John Dinh portfolio

A recruiter-focused portfolio for senior full stack and frontend opportunities. Built with React, TypeScript, and Vite, with a responsive layout, accessible project dialogs, and a downloadable resume.

## Local development

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

The local preview runs at `http://127.0.0.1:5186`.

```sh
npm run build
npm run preview
```

Production files are emitted to `build/`, preserving the original repository's output directory. Existing hosting can continue to use `npm run build` and serve `build/`. This checkout does not change DNS or hosting and does not publish automatically.

## Verification

With the local preview running:

```sh
npm run test:ui
npm run review
```

The browser checks cover eight viewport widths, navigation, project dialogs and keyboard focus, resume downloads, email-copy feedback, reduced motion, and automated accessibility checks. Playwright Chromium must be available; on another machine install it with `npx playwright install chromium` if necessary. Screenshots and the report are written to the ignored `.qa/` directory. Automated accessibility checks complement manual visual and keyboard review.

```sh
npm run typecheck
npx prettier --check src scripts index.html vite.config.ts package.json tsconfig.json
```

## Content and assets

- `src/App.tsx`: page sections, navigation, project dialogs, and contact controls.
- `src/projects.ts`: project context, contributions, outcomes, and links.
- `src/index.css`: design tokens, responsive layout, print styles, and reduced-motion support.
- `public/resume/John-Dinh-Resume.pdf`: current resume download. Replace this file when the resume changes.
- `public/images/john-dinh*.webp`: optimized versions of the supplied portrait.
- `public/images/zen-*.webp`: actual desktop, mobile, and full-page captures of nailandheadspa.com made November 11, 2026.
- `public/images/xda-archive.jpg`: archived publication image retained from the original portfolio; it is labeled as archival in the project details.
- `public/fonts/`: locally hosted Manrope variable font and its SIL Open Font License.

The selected work is Omni at The Institutes, Zen Nail & Head Spa, and XDA-Developers. The previous experiment/project grid is retired. Pocketnow remains in the professional experience section.

Omni is described through its purpose, responsibilities, and reported form-framework result. No employer source code or customer data is included. Contact uses email links and a copy control; there is no placeholder form or dependency on the old contact API.

## Content accuracy

The project descriptions use John's supplied experience. The form-code reduction is approximate. Zen's end-to-end contribution was confirmed by John; its underlying implementation stack is not guessed. XDA's contributions refer to his 2020–2021 work, not the site's current design.

The resume's credential level and exact PHP/Drupal versions remain unconfirmed. The degree is described without assuming a bachelor's credential. AWS is scoped to frontend integration. Employment dates and contact/profile links should be kept synchronized with the resume.

## Design and writing review

The November 11 revision uses a role-first introduction, compact project entries, literal section headings, and restrained typography. [Design references, editorial criteria, and measured results](docs/portfolio-review.md) explain the decisions. Run `npm run review` to regenerate layout and copy measurements in `.qa/content-review.json`. These checks do not measure recruiting outcomes or certify accessibility.
