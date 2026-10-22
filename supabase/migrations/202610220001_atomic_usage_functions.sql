-- Additive migration only: creates RPC functions and does not alter or delete
-- existing tables or rows. Apply this file in the Supabase SQL Editor before
-- deploying the Supabase-JS migration.
--
-- Existing Prisma model/table names are case-sensitive PostgreSQL identifiers.

create or replace function public.increment_user_usage(
  p_user_id text,
  p_type text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_type not in ('soulScan', 'dream', 'tarot') then
    raise exception 'Unsupported usage type: %', p_type;
  end if;

  insert into public."UserUsage" as current_usage (
    "id", "userId", "soulScan", "dream", "tarot", "createdAt", "updatedAt"
  )
  values (
    gen_random_uuid()::text,
    p_user_id,
    case when p_type = 'soulScan' then 1 else 0 end,
    case when p_type = 'dream' then 1 else 0 end,
    case when p_type = 'tarot' then 1 else 0 end,
    now(),
    now()
  )
  on conflict ("userId") do update
  set
    "soulScan" = current_usage."soulScan" + case when p_type = 'soulScan' then 1 else 0 end,
    "dream" = current_usage."dream" + case when p_type = 'dream' then 1 else 0 end,
    "tarot" = current_usage."tarot" + case when p_type = 'tarot' then 1 else 0 end,
    "updatedAt" = now();
end;
$$;

create or replace function public.increment_guest_usage(
  p_guest_id text,
  p_type text
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_type not in ('soulScan', 'dream', 'tarot') then
    raise exception 'Unsupported usage type: %', p_type;
  end if;

  insert into public."GuestSession" as current_guest (
    "id", "guestId", "soulScan", "dream", "tarot",
    "createdAt", "updatedAt", "expiresAt"
  )
  values (
    gen_random_uuid()::text,
    p_guest_id,
    case when p_type = 'soulScan' then 1 else 0 end,
    case when p_type = 'dream' then 1 else 0 end,
    case when p_type = 'tarot' then 1 else 0 end,
    now(),
    now(),
    null
  )
  on conflict ("guestId") do update
  set
    "soulScan" = current_guest."soulScan" + case when p_type = 'soulScan' then 1 else 0 end,
    "dream" = current_guest."dream" + case when p_type = 'dream' then 1 else 0 end,
    "tarot" = current_guest."tarot" + case when p_type = 'tarot' then 1 else 0 end,
    "updatedAt" = now();
end;
$$;

revoke all on function public.increment_user_usage(text, text) from public, anon, authenticated;
revoke all on function public.increment_guest_usage(text, text) from public, anon, authenticated;
grant execute on function public.increment_user_usage(text, text) to service_role;
grant execute on function public.increment_guest_usage(text, text) to service_role;
