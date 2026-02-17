import type { OperatorObject, PlayerObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Deop players.
 */
export type MinecraftOperatorsRemove = MethodObjectDefinition<
  'minecraft:operators/remove',
  [{ remove : PlayerObject[] }],
  /** operators */
  OperatorObject[]
>
