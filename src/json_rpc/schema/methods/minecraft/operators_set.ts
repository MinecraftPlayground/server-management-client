import type { OperatorObject } from '../../components/schemas/operator_object.ts';
import type { MethodObject } from '../../method_object.ts';


/**
 * Set all oped players
 */
export type MinecraftOperatorsSet = MethodObject<
  'minecraft:operators/set',
  [{ operators : OperatorObject[] }],
  { operators? : OperatorObject[] }
>
