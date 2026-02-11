import type { IncomingIpBanObject, IpBanObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Add ip to ban list
 */
export type MinecraftIpBansAdd = MethodObjectDefinition<
  'minecraft:ip_bans/add',
  [{ add : IncomingIpBanObject[] }],
  { banlist? : IpBanObject[] }
>
