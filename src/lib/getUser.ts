import { createClient } from "@/lib/supabase/server";

/**
 * Resolve the authenticated Supabase user in server-side code.
 * Reuse the shared SSR client so cookie/session handling stays consistent
 * across API routes and other server entry points.
 */
export async function getUser() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error("Supabase auth error:", error.message);
    return null;
  }

  return user;
}
