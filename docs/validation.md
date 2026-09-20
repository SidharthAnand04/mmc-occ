# Validation results

September 20, 2026

- Production static build: PASS. 18 HTML pages and sitemap generated.
- Astro/TypeScript diagnostics: PASS. No errors, warnings, or hints across 21 source files.
- Build-output checks: PASS. All 513 internal link/asset references resolve. Every page has exactly one H1, title, description, skip-navigation target, and noindex metadata. Image alt text and explicit dimensions are present. Location JSON-LD parses successfully. No placeholder hrefs or unfinished placeholder copy found.
- Hero image: optimized to approximately 68 KB WebP; supplied source preserved outside the repository.
- Fonts: self-hosted package assets; no runtime Google Fonts requests.
- MMC source browser inspection: confirmed published patient, payment, contact and appointment destinations. No patient data, messages, bookings, or payments were submitted.
- Production website/domain: unchanged.

## Remaining checks

- The cloud browser cannot access the local preview server (ERR_BLOCKED_BY_CLIENT). Desktop/mobile visual inspection and menu/FAQ interaction checks must be performed against the deployed preview. Responsive styles have been implemented, but a passed visual or interactive browser test is not claimed.
- Vercel deployment is not yet complete. The connected deployment tool returns `Tool deploy_to_vercel not found`, and the local Vercel CLI has no authenticated login. No preview URL is available yet.
- Validate the final preview at 390 px and 1440 px, including menu open/close/Escape, visible keyboard focus, card navigation, resources, clinic directions, 200% text zoom, and absence of horizontal overflow. Run a deployed accessibility/performance audit if required before production.
- Confirm clinical/business content and image rights in `content-verification.md` before production.
