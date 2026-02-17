import type { UserBanObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get the ban list.
 */
export type MinecraftBans = MethodObjectDefinition<
  'minecraft:bans',
  [],
  /** banlist */
  UserBanObject[]
>
