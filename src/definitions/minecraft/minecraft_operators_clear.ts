import type { OperatorObject } from '../../json_rpc/schema/components/schemas/operator_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Deop all players
 */
export type MinecraftOperatorsClear = MethodObject<
  'minecraft:operators/clear',
  never[],
  { operators? : OperatorObject[] }
>
