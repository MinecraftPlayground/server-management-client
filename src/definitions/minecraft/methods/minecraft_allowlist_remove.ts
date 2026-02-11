import type { PlayerObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Remove players from allowlist
 */
export type MinecraftAllowlistRemove = MethodObjectDefinition<
  'minecraft:allowlist/remove',
  [{ remove : PlayerObject[] }],
  { allowlist? : PlayerObject[] }
>
