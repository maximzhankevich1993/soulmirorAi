
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
 * Single browser Supabase client.
 *
 * IMPORTANT:
 * Do not create another createClient() with
 * @supabase/supabase-js inside client components.
 */
export const supabase = createBrowserClient(
  supabaseUrl,
  supabaseAnonKey
);

