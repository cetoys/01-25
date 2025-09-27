# KaloriSayar API Service

NestJS + Prisma backend for KaloriSayar. Currently includes a health check endpoint and Prisma schema covering core domain entities.

## Scripts

- `pnpm start --filter @kalorisayar/api-service` – Start the API.
- `pnpm start:dev --filter @kalorisayar/api-service` – Watch mode with hot reload.
- `pnpm prisma:migrate --filter @kalorisayar/api-service` – Run Prisma migrations.

## Next Steps

- Implement authentication, diary, foods, recipes, and tracking modules.
- Wire up Swagger/OpenAPI generation and `packages/api` codegen.
- Integrate Redis-backed job queues and background importers.
