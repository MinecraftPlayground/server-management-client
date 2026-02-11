import type { PlayerObject } from '../../json_rpc/schema/components/schemas/player_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Remove players from allowlist
 */
export type MinecraftAllowlistRemove = MethodObject<
  'minecraft:allowlist/remove',
  [{ remove : PlayerObject[] }],
  { allowlist? : PlayerObject[] }
>
