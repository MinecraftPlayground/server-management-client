import type { IpBanObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Get the ip ban list
 */
export type MinecraftIpBans = MethodObjectDefinition<
  'minecraft:ip_bans',
  never[],
  { banlist? : IpBanObject[] }
>
