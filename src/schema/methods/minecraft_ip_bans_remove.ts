import type { IpBanObject } from '../components/schemas/ip_ban_object.ts';
import type { MethodObject } from '../method_object.ts';


/**
 * Remove ip from ban list
 */
export type MinecraftIpBansRemove = MethodObject<
  'minecraft:ip_bans/remove',
  [{ ip : string[] }],
  { banlist : IpBanObject[] }
>
