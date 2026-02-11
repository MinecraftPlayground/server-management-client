import type { ServerStateObject } from '../../components/schemas/server_state_object.ts';
import type { MethodObject } from '../../method_object.ts';


/**
 * Get server status
 */
export type ServerStatus = MethodObject<
  'minecraft:server/status',
  never[],
  { status? : ServerStateObject }
>
