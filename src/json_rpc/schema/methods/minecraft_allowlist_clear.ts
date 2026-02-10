import type { PlayerObject } from '../components/schemas/player_object.ts';
import type { MethodObject } from '../method_object.ts';


/**
 * Clear all players in allowlist
 */
export type MinecraftAllowlistClear = MethodObject<
  'minecraft:allowlist/clear',
  never[],
  { allowlist? : PlayerObject[] }
>
