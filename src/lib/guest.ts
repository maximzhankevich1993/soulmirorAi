import { cookies } from "next/headers";
import { randomUUID } from "crypto";

const COOKIE_NAME = "sm_guest";

export async function getGuestId() {
  const cookieStore = await cookies();

  let guestId = cookieStore.get(COOKIE_NAME)?.value;

  if (!guestId) {
    guestId = randomUUID();

    cookieStore.set(COOKIE_NAME, guestId, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
    });
  }

  return guestId;
}