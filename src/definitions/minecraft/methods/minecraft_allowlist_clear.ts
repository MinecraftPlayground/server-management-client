import type { PlayerObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Clear all players in allowlist.
 */
export type MinecraftAllowlistClear = MethodObjectDefinition<
  'minecraft:allowlist/clear',
  [],
  /** allowlist */
  PlayerObject[]
>
