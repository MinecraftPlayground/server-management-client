import type { ServerStateObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Get server status
 */
export type MinecraftServerStatus = MethodObjectDefinition<
  'minecraft:server/status',
  never[],
  { status? : ServerStateObject }
>
