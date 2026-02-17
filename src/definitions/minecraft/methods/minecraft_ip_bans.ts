import type { IpBanObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get the ip ban list.
 */
export type MinecraftIpBans = MethodObjectDefinition<
  'minecraft:ip_bans',
  [],
  /** banlist */
  IpBanObject[]
>
