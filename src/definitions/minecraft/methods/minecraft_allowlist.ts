import type { PlayerObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Get the allowlist
 */
export type MinecraftAllowlist = MethodObjectDefinition<
  'minecraft:allowlist',
  never[],
  { allowlist? : PlayerObject[] }
>
