import type { NotificationObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Server save completed
 */
export type MinecraftNotificationServerSaved = NotificationObjectDefinition<
  'minecraft:notification/server/saved',
  never[]
>
