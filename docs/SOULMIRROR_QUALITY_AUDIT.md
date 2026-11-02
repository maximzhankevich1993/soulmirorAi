# SoulMirror AI — Product & Engineering Quality Audit

**Audit date:** 2026-11-02  
**Repository:** `maximzhankevich1993/soulmirorAi`  
**Working branch:** `migration/remove-prisma-supabase-js`  
**Production branch:** `main` (must remain untouched until review and verification)

## Safety and scope

- Keep Cloudflare as the deployment target.
- Preserve all existing Supabase/PostgreSQL tables and records.
- Do not run destructive SQL, Prisma migrations, DROP, TRUNCATE, or data rewrites.
- Keep the Prisma-to-Supabase work isolated from `main`.
- Never expose service-role keys or other secrets.
- Treat FutureSelf's quality bar as the engineering/UX reference, not as a reason to copy its product flow into SoulMirror.

## Repository state verified

- `main` still contains Prisma dependencies in `package.json` and Prisma calls in API routes.
- `main` contains both `src/app` and a root `app_backup` tree. The backup must be checked for references and build impact before removal; do not delete it blindly.
- `main` contains duplicate-looking component trees at root `components/` and `src/components/`. Verify which is actively imported before consolidating.
- The migration branch removes `prisma` and `@prisma/client` from `package.json`; its `package-lock.json` was checked and contains no Prisma package references.
- The migration branch contains a migration audit and an additive SQL file for usage-counter RPCs.
- GitHub-only inspection does not run the application, tests, lint, TypeScript, Next build, or Cloudflare preview. Those remain unverified.

## Confirmed defects and risks

### P0 — User-data exposure on `main`

- `src/app/api/soul-scan/history/route.ts` and `src/app/api/dream-analysis/history/route.ts` on `main` query records without authenticating the caller or filtering by `userId`.
- The migration branch versions add authentication and user scoping. These fixes must remain in the migration branch and be tested before release.

### P1 — Usage limits are inconsistent

- `src/lib/plans.ts` says one free use per tool.
- `src/lib/limits.ts` also says one free use per tool and uses the plan union `free | day | pro`.
- `src/lib/guestLimits.ts` enforces one browser-side guest use.
- `src/lib/usage.ts` on the migration branch enforces two server-side uses.
- Product behavior must be defined once and shared across guest UI, authenticated UI, and server enforcement. Until the product policy is explicitly settled, preserve the migration's documented server-side count of two and do not silently reset existing counters.

### P1 — Usage admission is not atomic

- The migration branch checks usage before calling the AI provider and increments the counter later.
- The new RPC functions make increments atomic, but they do not atomically reserve/check a remaining free use. Concurrent requests can both pass the initial check.
- Design a server-side atomic reservation/consume operation (including a safe failure/refund policy) before calling the AI provider. Test parallel requests.

### P1 — Unmetered save endpoint

- `src/app/api/soul-scan/save/route.ts` on the migration branch accepts client-provided scan fields and inserts a record without checking or consuming usage.
- No caller was found in the indexed default-branch source search. Confirm all call sites on the working branch and in legacy/backup components; if unused, remove the route. If it is required, redesign it so users cannot forge or save unlimited records.

### P1 — Plan and checkout mismatch

- Public `/pricing` advertises Free, Pro ($19), and Premium ($29).
- `/checkout` advertises Day Pass ($2.99), Monthly ($12.99), and Yearly ($79).
- Backend plan IDs on the migration branch are `free | day | monthly | yearly`; the legacy limits helper uses `free | day | pro`.
- The checkout page inspected is a plan-selection presentation; verify the complete payment creation, provider callback/webhook, signature validation, and entitlement activation before treating any plan as purchasable.
- Do not change prices, plan IDs, or existing customer entitlements until the canonical plan matrix and migration mapping are approved.

### P1 — Dashboard and authentication flow

- Dashboard plan state is hardcoded to `free`; it does not reflect the persisted plan.
- The password recovery/reset flow was not found in the inspected auth component/search results; inspect Supabase redirect configuration and add an end-to-end recovery flow if absent.
- Verify email confirmation callback behavior and that unconfirmed users cannot enter protected features.
- Verify email confirmation callback behavior and that unconfirmed users cannot enter protected features.

### P1 — Supabase server client consistency

- `src/lib/supabase/server.ts` uses the older individual `get/set/remove` cookie adapter shape.
- `src/lib/getUser.ts` creates another server client independently and intentionally does not write refreshed cookies.
- Standardize on one server-client factory using the current `getAll/setAll` cookie adapter pattern, and have server auth helpers reuse it. Confirm behavior in Route Handlers, Server Components, and Cloudflare runtime.

### P1 — Cloudflare deployment prerequisites

- `src/lib/supabase/admin.ts` requires `SUPABASE_SERVICE_ROLE_KEY`; it must exist only as a server-side Cloudflare secret / local ignored `.dev.vars` entry.
- `supabase/migrations/202610220001_atomic_usage_functions.sql` must be applied additively in the existing Supabase project before the migrated app can use its RPCs.
- Confirm the exact case-sensitive legacy table names and columns are exposed through PostgREST. No database migration has been run or verified during this GitHub-only audit.

### P2 — Product and AI quality

- Add provider request timeouts, bounded retries only where safe, response-schema validation, and consistent user-facing errors.
- Ensure usage is charged only once per successfully completed product action; protect against duplicate submissions and retries.
- Review Tarot deck/spread behavior and distinguish reflective guidance from deterministic or medical/financial claims.
- Verify that the AI prompts consistently return the schema the UI expects and handle malformed/partial model output.
- Audit all empty, loading, error, success, and limit-reached states on desktop and mobile.

### P2 — Design, accessibility, and performance

- Preserve Dark Luxury Mysticism: `#09090B`, `#D6B25E`, `#8B5CF6`, `#F4F1EA`, Inter + Cormorant Garamond.
- Use restrained motion, thin borders, spacious layouts, responsive controls, and accessible focus states.
- No gold-filled buttons, dated HUD styling, or cheap glassmorphism.
- Test 3D/Soul Orb fallback, reduced-motion behavior, touch interactions, and mobile GPU performance.
- Verify global smooth-scroll behavior does not interfere with forms, modals, keyboard navigation, or mobile scrolling.
- Verify metadata, canonical URLs, Open Graph/Twitter images, robots/sitemap, PWA manifest/icons, and noindex rules for private app routes.

## Required verification gates

1. Repository-wide Prisma reference audit on the working branch (runtime imports, scripts, schema, lockfile, backup files).
2. Confirm all active data access paths and preserve every existing table/column/record.
3. Confirm auth and ownership checks on every private API route.
4. Verify usage limits for guests and authenticated users, including parallel requests.
5. Verify plan mapping, checkout provider, webhook signature, expiry, refunds/cancellations, and entitlement reads.
6. Run clean dependency install, lint, TypeScript check, production build, and Cloudflare/OpenNext preview.
7. Run end-to-end checks for registration, email confirmation, login, logout, password recovery, dashboard welcome, Soul Scan, Dream Analysis, Tarot, history, limits, and mobile layouts.
8. Only after all gates pass, review a PR and consider merging into `main`.

## Fixes already committed to the migration branch

- Added this quality audit as a durable checklist.
- Standardized `src/lib/supabase/server.ts` on the SSR `getAll/setAll` cookie adapter.
- Changed `src/lib/getUser.ts` to reuse the shared server client instead of creating a second cookie/auth implementation.
- Corrected the dashboard's invalid `/login` redirect to the existing `/auth` route.
- Gated the cinematic welcome overlay until the authenticated profile lookup completes, avoiding the initial fallback-name flash.
- Scoped the welcome-seen session flag to the authenticated user, so switching accounts does not suppress another user's welcome.
- Removed stale Prisma references from the auth form's user-sync comments.
- Verified the migration branch lockfile has no Prisma package references.

## Current disposition

- `main` has not been modified by this audit or these fixes.
- All changes above are isolated to `migration/remove-prisma-supabase-js`.
- The fixes are committed but not runtime-tested in this GitHub-only session.
- Remaining blockers include canonical plan/price mapping, consistent limits, atomic usage reservation, the unmetered save endpoint, password recovery/email-confirmation verification, dynamic dashboard plan state, Cloudflare secret/SQL setup, and full build/E2E verification.
- No claim of production readiness is made until local/Cloudflare runtime checks and database verification have passed.
