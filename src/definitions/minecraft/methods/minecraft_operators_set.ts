import type { OperatorObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Set all oped players.
 */
export type MinecraftOperatorsSet = MethodObjectDefinition<
  'minecraft:operators/set',
  [{ operators : OperatorObject[] }],
  /** operators */
  OperatorObject[]
>
