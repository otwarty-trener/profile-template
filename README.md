# profile-template

GitHub template repository dla profili trenerów w sieci Otwarty Trener.

**Nie używaj bezpośrednio.** Profile są tworzone automatycznie przez
[`ceidg-sync`](https://github.com/otwarty-trener/ceidg-sync) po udanym claim
flow — backend kopiuje tę templatkę, wypełnia `profile.json` danymi z CEIDG
i ustawia `package.json.name` na `profile-{slug}`.

## Co tu siedzi

- `profile.json` — źródło prawdy dla profilu (placeholdery `__FIELD__` do podmiany)
- `astro.config.mjs` — czyta `base` z `package.json.name`, więc samo się dostraja
- `src/pages/` — generatory: HTML (`index.astro`), JSON (`profile.json.ts`),
  Schema.org (`schema.json.ts`), AI manifest (`.well-known/ai-profile.json.ts`),
  llms.txt
- `.github/workflows/deploy.yml` — auto-deploy na GitHub Pages przy push do `main`

Theme: [`@press2ai/theme-stripe`](https://www.npmjs.com/package/@press2ai/theme-stripe).
