import type { NotificationObjectDefinition } from '../../../json_rpc/schema/index.ts';
import type { ServerStateObject } from '../schemas.ts';


/**
 * Server status heartbeat
 */
export type MinecraftNotificationServerStatus = NotificationObjectDefinition<
  'minecraft:notification/server/status',
  [{ status : ServerStateObject }]
>
