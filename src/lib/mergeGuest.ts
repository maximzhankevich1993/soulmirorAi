/**
 * Guest-history merging is intentionally left as a no-op for now.
 *
 * The current product flow does not yet define how guest records should
 * be merged with an authenticated account. This file is kept so existing
 * imports remain valid, but it no longer depends on Prisma.
 */
export async function mergeGuestToUser(
  _guestId: string,
  _userId: string
): Promise<void> {
  // Implement only after the guest-to-account merge behavior is specified.
}
