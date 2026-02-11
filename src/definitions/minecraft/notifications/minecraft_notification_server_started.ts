import type { NotificationObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Server started
 */
export type MinecraftNotificationServerStarted = NotificationObjectDefinition<
  'minecraft:notification/server/started',
  never[]
>
