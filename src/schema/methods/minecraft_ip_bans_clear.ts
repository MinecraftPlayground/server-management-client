import type { IpBanObject } from '../components/schemas/ip_ban_object.ts';
import type { MethodObject } from '../method_object.ts';

/**
 * Clear all ips in ban list
 */
export type MinecraftIpBansClear = MethodObject<
  'minecraft:ip_bans/clear',
  never[],
  { banlist : IpBanObject[] }
>
