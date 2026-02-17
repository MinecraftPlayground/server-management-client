import type { TypedGameRuleObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get the available game rule keys and their current values.
 */
export type MinecraftGamerules = MethodObjectDefinition<
  'minecraft:gamerules',
  [],
  /** gamerules */
  TypedGameRuleObject[]
>
