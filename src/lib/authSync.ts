import { getUser } from "@/lib/getUser";
import { getGuestId } from "@/lib/guest";
import { mergeGuestToUser } from "@/lib/mergeGuest";

export async function syncGuestAccount() {
  const user = await getUser();

  if (!user) {
    return;
  }

  const guestId = await getGuestId();

  await mergeGuestToUser(
    guestId,
    user.id
  );
}