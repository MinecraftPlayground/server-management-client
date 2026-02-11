import type { IpBanObject } from '../../json_rpc/schema/components/schemas/ip_ban_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Get the ip ban list
 */
export type MinecraftIpBans = MethodObject<
  'minecraft:ip_bans',
  never[],
  { banlist? : IpBanObject[] }
>
