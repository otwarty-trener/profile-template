import type { APIRoute } from 'astro';
import { getJsonSchema } from '@press2ai/theme-stripe/ai';

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify(getJsonSchema(), null, 2), {
    headers: {
      'Content-Type': 'application/schema+json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    },
  });
};
