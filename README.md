# My Medical Clinic: occupational health redesign

Responsive Astro website for MMC, designed around employers and occupational medicine. The existing MMC production website and domain are not changed.

## Run locally

Requires Node 22.12+ (validated on Node 24).

```sh
npm ci
npm run dev
npm run check
npm run build
npm test
npm run preview
```

## Architecture

- Home: employer-first introduction, service directory, employer process, clinic directory, and former-MOH pathway.
- `/services/`: six service detail pages covering injury care, physicals/screenings, testing, on-site services, exposure exams, and employee health.
- `/employers/` and `/contact/`: employer setup guidance and functional call/email links.
- `/locations/`: directory plus individual Eagan, Maplewood, and Plymouth pages.
- `/team/`: verified MMC clinician names and credentials.
- `/resources/`: existing patient forms, referrals, booking, payment, and general medicine links.
- `/former-moh-clients/`: welcome and setup guidance without claiming automatic account or records transfer.
- Custom 404 page; sitemap; canonical URLs and location structured data.

Content is centralized in `src/data/site.ts`. Design tokens and responsive styles are in `src/styles/global.css`. Pages are pre-rendered HTML with a small navigation script, self-hosted fonts, and optimized WebP imagery.

## Preview deployment

```sh
vercel deploy
```

Deploy the feature branch as a **Preview**. Do not use `--prod`, promote the deployment, or attach the clinic's production domain. `vercel.json` selects Astro and `dist`.

Preview indexing is deliberately disabled in HTML metadata, robots.txt, and HTTP headers. A future production launch requires an explicit decision to enable indexing, verify canonical host, and approve redirects and content. Do not remove preview protections for this review deployment.

No medical data is collected by this build. Email links open the visitor's email client. Appointment, payment, and form links use existing MMC destinations. No inquiry submission or appointment confirmation is simulated.

## Content review and validation

See [content verification](docs/content-verification.md), [design decisions](docs/design-decisions.md), and [validation](docs/validation.md).
