import type { NotificationObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Server shutting down
 */
export type MinecraftNotificationServerStopping = NotificationObjectDefinition<
  'minecraft:notification/server/stopping',
  never[]
>
