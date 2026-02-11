import type { ServerStateObject } from '../../json_rpc/schema/components/schemas/server_state_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Get server status
 */
export type MinecraftServerStatus = MethodObject<
  'minecraft:server/status',
  never[],
  { status? : ServerStateObject }
>
