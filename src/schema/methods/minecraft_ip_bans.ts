import type { IpBanObject } from '../components/schemas/ip_ban_object.ts';
import type { MethodObject } from '../method_object.ts';

/**
 * Get the ip ban list
 */
export type MinecraftIpBans = MethodObject<
  'minecraft:ip_bans',
  never[],
  { banlist : IpBanObject[] }
>
