import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Получает текущего пользователя на сервере (API routes)
 * Используется для:
 * - лимитов
 * - истории
 * - защиты API
 */
export async function getUser() {
  // 🍪 читаем cookies запроса
  const cookieStore = await cookies();

  // 🔐 создаём supabase client на сервере
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // читаем cookies из запроса
        getAll() {
          return cookieStore.getAll();
        },

        // в API нам не нужно писать cookies обратно
        setAll() {
          // пусто намеренно
        },
      },
    }
  );

  // 👤 получаем текущего пользователя
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  // ⚠️ лог ошибок (если токен битый)
  if (error) {
    console.error("Supabase auth error:", error.message);
    return null;
  }

  // ✅ возвращаем user или null
  return user;
}