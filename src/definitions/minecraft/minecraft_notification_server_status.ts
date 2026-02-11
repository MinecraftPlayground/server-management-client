import type { ServerStateObject } from '../../json_rpc/schema/components/schemas/server_state_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Server status heartbeat
 */
export type MinecraftNotificationServerStatus = MethodObject<
  'minecraft:notification/server/status',
  [{ status : ServerStateObject }]
>
