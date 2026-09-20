import { services, clinics, team } from '../data/site';
export function GET() {
  const paths = [
    '',
    'services/',
    'employers/',
    'contact/',
    'resources/',
    'team/',
    'former-moh-clients/',
    'locations/',
    'create-account/',
    'inquiry-of-services/',
    'request-appointment/',
    'patient-forms/',
    'health-information-release-authorization-form/',
    'pay-my-bill/',
    'privacy/',
    ...team.map((p) => `team/${p[0].toLowerCase().replaceAll(' ', '-')}/`),
    ...services.map((s) => `services/${s.slug}/`),
    ...clinics.map((c) => `locations/${c.slug}/`),
  ];
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((p) => `<url><loc>https://mymedicalclinicmn.com/${p}</loc></url>`).join('')}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
}
