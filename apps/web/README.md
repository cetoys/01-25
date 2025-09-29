# KaloriSayar Web

This Next.js App Router project delivers the marketing site and authenticated web diary for KaloriSayar. The current implementation includes a hero landing page demonstrating shared UI usage.

## Scripts

- `pnpm dev --filter @kalorisayar/web` – Start the development server.
- `pnpm build --filter @kalorisayar/web` – Build for production.
- `pnpm lint --filter @kalorisayar/web` – Run lint checks.

## Next Steps

- Implement App Router routes for diary, recipes, and reports.
- Integrate authentication using Auth.js against the NestJS API.
- Share API client and types from `packages/api` and `packages/types`.
- Apply localization with English and Turkish translations.
