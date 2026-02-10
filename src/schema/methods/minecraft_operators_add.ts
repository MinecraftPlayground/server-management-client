import type { OperatorObject } from '../components/schemas/operator_object.ts';
import type { MethodObject } from '../method_object.ts';


/**
 * Op players
 */
export type MinecraftOperatorsAdd = MethodObject<
  'minecraft:operators/add',
  [{ add : OperatorObject[] }],
  { operators : OperatorObject[] }
>
