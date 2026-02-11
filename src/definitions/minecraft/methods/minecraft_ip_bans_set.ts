import type { IpBanObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Set the ip banlist
 */
export type MinecraftIpBansSet = MethodObjectDefinition<
  'minecraft:ip_bans/set',
  [{ banlist : IpBanObject[] }],
  { banlist? : IpBanObject[] }
>
