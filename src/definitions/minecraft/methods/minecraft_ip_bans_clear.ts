import type { IpBanObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Clear all ips in ban list.
 */
export type MinecraftIpBansClear = MethodObjectDefinition<
  'minecraft:ip_bans/clear',
  [],
  /** banlist */
  IpBanObject[]
>
