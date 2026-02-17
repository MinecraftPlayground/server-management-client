import type { OperatorObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get all oped players.
 */
export type MinecraftOperators = MethodObjectDefinition<
  'minecraft:operators',
  [],
  /** operators */
  OperatorObject[]
>
