import type { PlayerObject } from '../../json_rpc/schema/components/schemas/player_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Clear all players in allowlist
 */
export type MinecraftAllowlistClear = MethodObject<
  'minecraft:allowlist/clear',
  never[],
  { allowlist? : PlayerObject[] }
>
