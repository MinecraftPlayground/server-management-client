import type { PlayerObject } from '../../components/schemas/player_object.ts';
import type { OperatorObject } from '../../components/schemas/operator_object.ts';
import type { MethodObject } from '../../method_object.ts';


/**
 * Deop players
 */
export type OperatorsRemove = MethodObject<
  'minecraft:operators/remove',
  [{ remove : PlayerObject[] }],
  { operators? : OperatorObject[] }
>
