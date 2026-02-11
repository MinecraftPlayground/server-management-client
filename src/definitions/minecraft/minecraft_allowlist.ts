import type { PlayerObject } from '../../json_rpc/schema/components/schemas/player_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Get the allowlist
 */
export type MinecraftAllowlist = MethodObject<
  'minecraft:allowlist',
  never[],
  { allowlist? : PlayerObject[] }
>
