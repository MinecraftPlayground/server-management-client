import type { PlayerObject } from '../../components/schemas/player_object.ts';
import type { MethodObject } from '../../method_object.ts';


/**
 * Get the allowlist
 */
export type Allowlist = MethodObject<
  'minecraft:allowlist',
  never[],
  { allowlist? : PlayerObject[] }
>
