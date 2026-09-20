# MOH reference implementation map

This revision follows the supplied local MOH archive more closely. The Wayback snapshot still could not be opened by the web research tool; its supplied local mirror was inspected instead.

## Implemented

- Full-width workforce photo banner, white inset headline panel, Libre Franklin typography, navy headings, rounded buttons, image service tiles, three homepage task shortcuts, blue feature section, and clinic/footer structure.
- Desktop grouped service menu and location dropdown; mobile menu; keyboard focus and Escape handling.
- 18 confirmed service/overview pages and 11 explicitly labeled service-inquiry pages. Inquiry pages do not assert unverified MMC offerings.
- Searchable/filterable service directory with an empty-results state.
- Employer setup and service inquiry pages with validated email-draft forms. Users review the message, open their own mail app, or copy the draft. No false submission or account creation confirmation.
- Appointment page linked to MMC's existing request flow, payment page linked to its existing Clover destination, patient forms and medical-record authorization pages linked to MMC documents.
- Three MMC location pages, map embeds and directions; six clinician profile pages linked from the team directory.
- Dedicated former-MOH welcome, resources, privacy handoff, and 404 page.

## Reference differences requiring business decisions

- MOH locations are not represented as MMC locations. Archived MOH staff bios and testimonials are not relabeled as MMC material.
- FAA exams, MRO services, respirator testing/clearance, immunization/titer programs, hearing screening and work performance programs require MMC confirmation. They are clearly labeled as inquiries.
- The archived online respirator medical questionnaire is not recreated as an unsecured form. A medical intake workflow requires MMC's approved secure destination and service confirmation.
- An employer account request does not create a portal login. CRM integration, secure medical intake, and backend submission require a confirmed MMC destination. The archive's embedded third-party forms are not sent to the former clinic.
- MOH-specific news, staff announcements, archived medical articles, and legal/collections policies are not copied as MMC publications. The resources section links to current MMC materials. Original editorial pages need MMC-approved content before their counterpart pages can be published.
- Decorative photograph licensing remains subject to MMC approval before production. Added supplied assets: `2026/01/MOH-Front-Cover-2.jpg`, `2022/08/iStock-1474842223_Arriving-at-the-doctors-office-handshake.jpg`, and `2022/08/iStock-471717029.jpg`, converted to compressed WebP. They are illustrative stock photos, not evidence of MMC employees or patients.

This is 54 implemented HTML pages, not an assertion that every archived URL or backend feature is reproduced. Remaining differences above are intentional factual and integration boundaries.
