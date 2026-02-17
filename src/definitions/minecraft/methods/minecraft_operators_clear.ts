import type { OperatorObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Deop all players.
 */
export type MinecraftOperatorsClear = MethodObjectDefinition<
  'minecraft:operators/clear',
  [],
  /** operators */
  OperatorObject[]
>
