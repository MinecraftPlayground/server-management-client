import type { PlayerObject } from '../../components/schemas/player_object.ts';
import type { MethodObject } from '../../method_object.ts';


/**
 * Add players to allowlist
 */
export type AllowlistAdd = MethodObject<
  'minecraft:allowlist/add',
  [{ add : PlayerObject[] }],
  { allowlist? : PlayerObject[] }
>
