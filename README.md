# My Medical Occupational Health

Direct static adaptation of the supplied website source, using the current My Medical Clinic identity and business information. Editable page HTML is in `site/`; shared styles, scripts, photographs, fonts and logos are in `site/assets/`.

## Development

Requires Node 22 or later. Run `npm ci`, then `npm run dev`. The site runs at http://localhost:4321. Run `npm run check`, `npm run build`, and `npm test` to validate and compile all routes. `npm run preview` serves the compiled output.

## Source fidelity

The supplied HTML containers, stylesheet rules, typography, orange/green/navy color palette, hero images, section ordering, grids, article content and nested navigation are retained. Photos are encoded as optimized WebP. Organization-specific staff, testimonials, logos, clinic locations, addresses, phone numbers, contact destinations and metadata use current clinic information. Location photos depicting different premises are replaced with address visuals. Clinic details were checked at https://mymedicalclinicmn.com/contact-us/ on September 21, 2026.

## Deferred connections

Employer/contact forms prepare an email for review. The medical questionnaire stays local to the browser and does not send or persist answers. Payment and records links use the clinic's current destinations. Backend accounts, secure clinical intake and detailed mobile optimization are deferred. Service availability and clinical/legal content should receive the clinic's operational review before a production launch.

## Hosting

Stable site URL: **https://mmc-occupational-health.vercel.app**

The Vercel project `mmc-occ-preview` is connected to `SidharthAnand04/mmc-occ` through the native GitHub integration. Every push to `main` automatically builds and deploys the site into `dist`. After a successful deployment, Vercel assigns the same stable URL above to the new version. If a build fails, the previous successful version stays available.

Push source changes to `main`; no manual deploy, new link, deploy hook, or GitHub Actions deployment token is required. Individual deployment URLs remain available for inspecting older versions. Deployment status and logs are available at https://vercel.com/sidharthanand04s-projects/mmc-occ-preview/deployments.

This project is separate from the existing clinic website and has no clinic production domain attached. Review indexing remains disabled. Git history preserves earlier iterations; the current source tree contains only the adapted site.
