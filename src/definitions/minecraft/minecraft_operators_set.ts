import type { OperatorObject } from '../../json_rpc/schema/components/schemas/operator_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Set all oped players
 */
export type MinecraftOperatorsSet = MethodObject<
  'minecraft:operators/set',
  [{ operators : OperatorObject[] }],
  { operators? : OperatorObject[] }
>
