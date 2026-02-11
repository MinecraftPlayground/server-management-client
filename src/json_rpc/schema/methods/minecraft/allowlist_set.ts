import type { PlayerObject } from '../../components/schemas/player_object.ts';
import type { MethodObject } from '../../method_object.ts';


/**
 * Set the allowlist
 */
export type AllowlistSet = MethodObject<
  'minecraft:allowlist/set',
  [{ players : PlayerObject[] }],
  { allowlist? : PlayerObject[] }
>
