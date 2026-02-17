import type { PlayerObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Set the allowlist.
 */
export type MinecraftAllowlistSet = MethodObjectDefinition<
  'minecraft:allowlist/set',
  [{ players : PlayerObject[] }],
  /** allowlist */
  PlayerObject[]
>
