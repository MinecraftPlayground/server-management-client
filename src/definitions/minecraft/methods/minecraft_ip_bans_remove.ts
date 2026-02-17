import type { IpBanObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Remove ip from ban list.
 */
export type MinecraftIpBansRemove = MethodObjectDefinition<
  'minecraft:ip_bans/remove',
  [{ ip : string[] }],
  /** banlist */
  IpBanObject[]
>
