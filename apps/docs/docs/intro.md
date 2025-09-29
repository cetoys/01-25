---
sidebar_position: 1
---

# KaloriSayar Documentation

Welcome to the KaloriSayar (CalorieForge) developer hub. This documentation provides a high-level overview of the monorepo, developer tooling, and the end-to-end architecture required to deliver a bilingual nutrition companion product.

## Monorepo Overview

- **Web** – Next.js App Router client for marketing, diary, billing, and analytics.
- **Mobile** – Expo-powered React Native app with offline-first logging and device integrations.
- **Services** – NestJS API with PostgreSQL, Prisma, Redis, and background workers.
- **Admin** – Operational console for moderation, analytics, and feature flag management.
- **Packages** – Shared UI primitives, TypeScript types, API client, and configuration presets.

## Quick Start

```bash
pnpm install
pnpm dev
```

The `dev` pipeline will orchestrate Docker dependencies (database, Redis, MinIO) and launch each app in watch mode once implemented.

## Next Steps

1. Flesh out the Prisma schema and migrations in `services/api`.
2. Generate the OpenAPI spec and TypeScript client in `packages/api`.
3. Implement onboarding, diary, and tracking flows on web/mobile.
4. Configure CI/CD workflows and infrastructure templates.

For deeper details, explore the additional guides in this documentation space.
