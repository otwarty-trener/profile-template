import type { APIRoute } from 'astro';
import profile from '../../profile.json';

export const GET: APIRoute = async ({ site }) => {
  const fullName = `${profile.firstName} ${profile.lastName}`;
  const base = site?.toString().replace(/\/$/, '') ?? '';
  const lines = [
    `# ${fullName}`,
    '',
    `> ${profile.jobTitle}${profile.city ? ` w ${profile.city}` : ''}. ${profile.bio ?? ''}`,
    '',
    '## Dane maszynowe (AI + Human first hybrid)',
    '',
    `- [Manifest discovery](${base}/.well-known/ai-profile): pełna lista reprezentacji`,
    `- [Profil JSON](${base}/profile.json): dane`,
    `- [JSON Schema](${base}/schema.json): kontrakt danych`,
    `- [HTML](${base}/): strona dla ludzi`,
    `- [Sitemap](${base}/sitemap-index.xml)`,
  ];
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
