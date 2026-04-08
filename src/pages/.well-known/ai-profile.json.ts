import type { APIRoute } from 'astro';
import { getAiManifest, profileSchema } from '@press2ai/theme-stripe';
import profileData from '../../../profile.json';

export const GET: APIRoute = async ({ site }) => {
  const profile = profileSchema.parse(profileData);
  const baseUrl = site?.toString() ?? 'https://otwarty-trener.github.io/profile-jan-kowalski';
  const manifest = getAiManifest({ baseUrl, profile });

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    },
  });
};
