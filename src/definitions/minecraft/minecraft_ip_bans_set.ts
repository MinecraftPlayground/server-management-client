import type { IpBanObject } from '../../json_rpc/schema/components/schemas/ip_ban_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Set the ip banlist
 */
export type MinecraftIpBansSet = MethodObject<
  'minecraft:ip_bans/set',
  [{ banlist : IpBanObject[] }],
  { banlist? : IpBanObject[] }
>
