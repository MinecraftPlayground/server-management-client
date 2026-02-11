import type { ServerStateObject } from '../../components/schemas/server_state_object.ts';
import type { MethodObject } from '../../method_object.ts';


/**
 * Server status heartbeat
 */
export type NotificationServerStatus = MethodObject<
  'minecraft:notification/server/status',
  [{ status : ServerStateObject }]
>
