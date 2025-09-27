# KaloriSayar Monorepo

KaloriSayar (CalorieForge) is a bilingual (Turkish/English) nutrition companion inspired by leading calorie counting products. This monorepo uses Turborepo and pnpm to manage web, mobile, backend, admin, documentation, shared packages, and infrastructure resources.

> **Status:** This repository currently provides an architectural scaffold, documentation, and configuration groundwork for continued feature development. It is intended as a starting point for the complete product described in the project specification.

## Structure

```
apps/
  web/           # Next.js App Router client
  admin/         # Next.js admin console
  mobile/        # Expo React Native application
  docs/          # Docusaurus documentation
packages/
  ui/            # Shared UI components and design tokens
  types/         # Shared TypeScript types
  api/           # Generated API client & helpers
  config/        # ESLint, Prettier, TS configs
services/
  api/           # NestJS backend service
infra/
  docker/        # Docker Compose and container assets
  terraform/     # Infrastructure as code templates
scripts/         # Tooling and automation scripts
```

## Getting Started

1. Ensure you have **Node.js LTS**, **pnpm**, **Docker**, and **Git** installed.
2. Copy environment templates: `cp .env.example .env` (fill in secrets per service).
3. Install dependencies: `pnpm install`.
4. Start the developer experience stack: `pnpm dev`.

Each workspace includes additional README files that outline next steps for implementing full functionality.

## Tooling

- **Turborepo** orchestrates tasks across packages and apps.
- **pnpm** manages dependencies via workspaces.
- **TypeScript** is the default language for all applications and packages.

## Documentation

Refer to `apps/docs` (Docusaurus) for in-depth guides covering architecture decisions, API contracts, and operational runbooks.

---

This scaffold is intentionally modular so teams can expand each vertical (web, mobile, backend, infrastructure) independently while sharing core domain types and design tokens.
