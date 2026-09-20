# Design and information architecture

## Primary audience

HR, safety, operations, and business owners arranging workforce care. Employees retain clear routes to appointments, forms, clinics, and existing general medicine resources.

## Navigation

Services / For employers / Locations / Our team / Patient resources. A persistent Partner with MMC action leads to employer contact. The utility bar carries phone, contact, and billing links. A restrained welcome strip directs former MOH clients to their own page.

## Homepage hierarchy

1. Employer-focused headline with a workforce photograph, service action, and clinic link.
2. Three task shortcuts: injury care, employee appointment, employer setup.
3. Six verified service groups.
4. Employer relationship and planning process.
5. Three clinic locations with hours and direction links.
6. Former-MOH welcome and next steps.
7. Direct employer contact action and resource footer.

## Visual system

Navy #0B2D49, primary blue #0967B4, white, and pale blue #EFF6FB. Manrope headings and DM Sans body typography are self-hosted. A restrained asymmetrical hero, generous spacing, thin dividers, and consistent service icons create a professional employer-focused identity. No unverified metrics, reviews, accreditations, or performance promises are included.

## Engineering

Astro outputs static HTML for service and location discovery without client-side routing. Small navigation JavaScript provides mobile menu state and Escape behavior. Semantic landmarks, accessible link names, visible focus, skip navigation, real headings, reduced motion, and responsive layouts are built in. The hero is compressed to WebP and dimensions are reserved. No trackers, cookies, API keys, backend, or external font requests are needed.

SEO metadata and MedicalClinic structured data are included, but the preview is deliberately noindex. Production migration is a separate task: check redirect mappings, canonical domain, sitemap, indexing, and final approved business content before changing the live domain.
