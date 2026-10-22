import "server-only";

import { createClient } from "@supabase/supabase-js";

/**
 * Privileged Supabase client for server-only API routes.
 *
 * Never import this module into client components. The service-role
 * key bypasses Row Level Security, so every route must authenticate
 * the caller and explicitly scope user-owned queries by userId.
 */
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url) {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL is not configured");
  }

  if (!serviceRoleKey) {
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY is not configured for server-side database access"
    );
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  });
}
