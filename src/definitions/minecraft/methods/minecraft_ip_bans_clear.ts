import type { IpBanObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Clear all ips in ban list
 */
export type MinecraftIpBansClear = MethodObjectDefinition<
  'minecraft:ip_bans/clear',
  never[],
  { banlist? : IpBanObject[] }
>
