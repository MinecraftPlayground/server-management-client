import type { PlayerObject } from '../../components/schemas/player_object.ts';
import type { MethodObject } from '../../method_object.ts';


/**
 * Remove players from allowlist
 */
export type AllowlistRemove = MethodObject<
  'minecraft:allowlist/remove',
  [{ remove : PlayerObject[] }],
  { allowlist? : PlayerObject[] }
>
