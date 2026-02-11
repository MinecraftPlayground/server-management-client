import type { PlayerObject } from '../../json_rpc/schema/components/schemas/player_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Set the allowlist
 */
export type MinecraftAllowlistSet = MethodObject<
  'minecraft:allowlist/set',
  [{ players : PlayerObject[] }],
  { allowlist? : PlayerObject[] }
>
