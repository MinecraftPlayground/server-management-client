import type { OperatorObject, PlayerObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Deop players
 */
export type MinecraftOperatorsRemove = MethodObjectDefinition<
  'minecraft:operators/remove',
  [{ remove : PlayerObject[] }],
  { operators? : OperatorObject[] }
>
