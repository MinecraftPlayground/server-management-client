import type { IpBanObject } from '../components/schemas/ip_ban_object.ts';
import type { MethodObject } from '../method_object.ts';


/**
 * Set the ip banlist
 */
export type MinecraftIpBansSet = MethodObject<
  'minecraft:ip_bans/set',
  [{ banlist : IpBanObject[] }],
  { banlist? : IpBanObject[] }
>
