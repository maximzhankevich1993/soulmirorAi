# Prisma → Supabase JS migration audit

## Safety rules
- This migration is being performed on `migration/remove-prisma-supabase-js`, based on `main`.
- Do not modify `main` directly.
- Do not run Prisma migrations, drop tables, truncate tables, or delete existing records.
- Preserve existing database tables and their current data.
- Keep Cloudflare Workers as the deployment target.
- Do not expose secrets from `.env`, `.dev.vars`, or GitHub settings.

## Confirmed Prisma call sites

### Shared data/access helpers
- `src/lib/prisma.ts` — PrismaClient + PrismaPg + pg Pool. Remove only after all imports are migrated.
- `src/lib/usage.ts` — reads/writes `GuestSession` and `UserUsage`; reads `User` with `UserPlan` and `UserUsage`.
- `src/lib/getUserPlan.ts` — reads `UserPlan`.
- `src/lib/mergeGuest.ts` — imports Prisma but currently contains only a placeholder.
- `src/lib/getActor.ts` and `src/lib/getUser.ts` — actor/session helpers; currently Supabase-auth based, not Prisma themselves.
- `src/lib/supabase/server.ts` — existing server Supabase client; reuse/standardize instead of introducing a second auth approach.

### API routes
- `src/app/api/user/sync/route.ts` — upserts `User` and `UserPlan`.
- `src/app/api/usage/route.ts` — reads `UserUsage`.
- `src/app/api/soul-scan/route.ts` — creates `SoulScan`; updates user or guest usage.
- `src/app/api/dream-analysis/route.ts` — creates `DreamAnalysis`; updates user or guest usage.
- `src/app/api/tarot/route.ts` — creates `TarotReading`; updates user or guest usage.
- `src/app/api/journey/route.ts` — reads the latest 20 records from `SoulScan`, `DreamAnalysis`, and `TarotReading`.
- `src/app/api/history/route.ts` — reads the latest 20 records from those same three tables.
- `src/app/api/soul-memory/route.ts` — reads the latest `SoulScan`.
- `src/app/api/soul-scan/history/route.ts` — reads `SoulScan` history.
- `src/app/api/dream-analysis/history/route.ts` — reads `DreamAnalysis` history.
- `src/app/api/soul-scan/save/route.ts` — creates `SoulScan`; currently needs an authorization/ownership review as part of the migration.

## Database models found in `prisma/schema.prisma`
- `User`
- `UserPlan`
- `SoulScan`
- `DreamAnalysis`
- `TarotReading`
- `UserUsage`
- `GuestSession`

## Important consistency checks before replacing code
- The app has both server-side guest counters in `GuestSession` and browser-side guest counters in `src/lib/guestLimits.ts`; avoid accidentally changing the intended limit behavior.
- `src/lib/limits.ts` currently describes one free use per tool, while `src/lib/usage.ts` enforces two. Do not silently change product limits during the database migration; confirm the intended policy from the current API behavior.
- `UserUsage` is one row per user (`userId` unique); do not replace it with a date-based counter.
- Plan names in the Prisma schema/helpers are currently `free`, `day`, and `pro`. Checkout UI may use additional display IDs; map those deliberately rather than casting arbitrary strings.
- Routes that return history must scope records to the authenticated user's ID. Review `soul-scan/history`, `dream-analysis/history`, and `soul-scan/save` carefully before production use.
- Supabase JS replacement must use the server-side client and preserve authentication/RLS boundaries. Do not place a service-role key in client code.

## Migration order
1. Standardize the server Supabase client and establish safe server-side query patterns.
2. Replace user sync and plan/usage reads/writes.
3. Replace create/read operations for Soul Scan, Dream Analysis, and Tarot.
4. Replace history, journey, and soul-memory routes.
5. Review guest behavior and authorization.
6. Remove Prisma dependencies/configuration only after a repository-wide reference audit confirms no remaining runtime imports.
7. Run lint/typecheck/build and Cloudflare preview; keep changes isolated to this branch.

## New deployment requirements

The new server-side data client in `src/lib/supabase/admin.ts` requires
`SUPABASE_SERVICE_ROLE_KEY`. This key is privileged and must only be stored
as a server-side secret; never prefix it with `NEXT_PUBLIC_`, commit it, or
import the admin client into browser components.

Before testing/deploying this branch:

1. In the existing Supabase project, open SQL Editor and run
   `supabase/migrations/202610220001_atomic_usage_functions.sql`. This is an
   additive migration: it creates two RPC functions and does not drop, truncate,
   or rewrite any existing table or row.
2. For local OpenNext/Wrangler preview, put the key in the ignored local
   `.dev.vars` file as `SUPABASE_SERVICE_ROLE_KEY=...`.
3. For Cloudflare, set the secret with
   `npx wrangler secret put SUPABASE_SERVICE_ROLE_KEY` and paste the key when
   prompted. Do not put the key in `wrangler.jsonc` or source control.
4. Confirm the existing Supabase schema exposes the Prisma-created, case-sensitive
   tables `User`, `UserPlan`, `UserUsage`, `GuestSession`, `SoulScan`,
   `DreamAnalysis`, and `TarotReading` through the public schema/PostgREST.
5. Then run install, typecheck/build, and Cloudflare preview checks. These checks
   have not been run from this GitHub-only editing session.

The migration intentionally does not change the existing free-use count: the
server helper continues to enforce two uses per tool. The browser helper's
separate local guest counter remains separate from server-side enforcement.
