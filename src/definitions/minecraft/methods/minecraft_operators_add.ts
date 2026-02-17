import type { OperatorObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Op players.
 */
export type MinecraftOperatorsAdd = MethodObjectDefinition<
  'minecraft:operators/add',
  [{ add : OperatorObject[] }],
  /** operators */
  OperatorObject[]
>
