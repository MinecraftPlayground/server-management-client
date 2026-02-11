import type { PlayerObject } from '../../json_rpc/schema/components/schemas/player_object.ts';
import type { OperatorObject } from '../../json_rpc/schema/components/schemas/operator_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Deop players
 */
export type MinecraftOperatorsRemove = MethodObject<
  'minecraft:operators/remove',
  [{ remove : PlayerObject[] }],
  { operators? : OperatorObject[] }
>
