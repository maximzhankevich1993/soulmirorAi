import { getUser } from "@/lib/getUser";
import { getGuestId } from "@/lib/guest";

export type Actor =
  | {
      type: "user";
      userId: string;
    }
  | {
      type: "guest";
      guestId: string;
    };

export async function getActor(): Promise<Actor> {
  const user = await getUser();

  if (user) {
    return {
      type: "user",
      userId: user.id,
    };
  }

  const guestId = await getGuestId();

  return {
    type: "guest",
    guestId,
  };
}