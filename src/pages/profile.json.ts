import type { APIRoute } from 'astro';
import profile from '../../profile.json';

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify(profile, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    },
  });
};
