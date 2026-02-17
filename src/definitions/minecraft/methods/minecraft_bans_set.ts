import type { UserBanObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Set the banlist.
 */
export type MinecraftBansSet = MethodObjectDefinition<
  'minecraft:bans/set',
  [{ bans : UserBanObject[] }],
  /** banlist */
  UserBanObject[]
>
