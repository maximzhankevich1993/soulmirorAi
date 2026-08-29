
import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error(
    "Missing NEXT_PUBLIC_SUPABASE_URL environment variable"
  );
}

if (!supabaseAnonKey) {
  throw new Error(
    "Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable"
  );
}

/**
 * SoulMirror browser client
 *
 * IMPORTANT:
 * We intentionally use sessionStorage instead of
 * localStorage.
 *
 * This means:
 *
 * - navigation between pages keeps the session
 * - Dashboard -> SoulMirror keeps the session
 * - refreshing the page keeps the session
 * - closing the browser tab removes the session
 * - opening SoulMirror again starts unauthenticated
 *
 * This matches the desired SoulMirror UX.
 */

export const supabase = createBrowserClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      storage:
        typeof window !== "undefined"
          ? window.sessionStorage
          : undefined,

      persistSession: true,

      autoRefreshToken: true,

      detectSessionInUrl: true,
    },
  }
);

