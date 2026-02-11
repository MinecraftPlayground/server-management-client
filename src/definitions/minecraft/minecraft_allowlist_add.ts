import type { PlayerObject } from '../../json_rpc/schema/components/schemas/player_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Add players to allowlist
 */
export type MinecraftAllowlistAdd = MethodObject<
  'minecraft:allowlist/add',
  [{ add : PlayerObject[] }],
  { allowlist? : PlayerObject[] }
>
