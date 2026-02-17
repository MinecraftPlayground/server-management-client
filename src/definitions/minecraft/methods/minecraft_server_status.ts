import type { ServerStateObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get server status.
 */
export type MinecraftServerStatus = MethodObjectDefinition<
  'minecraft:server/status',
  [],
  /** status */
  ServerStateObject
>
