import type { OperatorObject } from '../../json_rpc/schema/components/schemas/operator_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Get all oped players
 */
export type MinecraftOperators = MethodObject<
  'minecraft:operators',
  never[],
  { operators? : OperatorObject[] }
>
