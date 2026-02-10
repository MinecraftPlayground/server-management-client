import type { OperatorObject } from '../components/schemas/operator_object.ts';
import type { MethodObject } from '../method_object.ts';


/**
 * Deop all players
 */
export type MinecraftOperatorsClear = MethodObject<
  'minecraft:operators/clear',
  never[],
  { operators : OperatorObject[] }
>
