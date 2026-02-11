import type { NotificationObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Server save started
 */
export type MinecraftNotificationServerSaving = NotificationObjectDefinition<
  'minecraft:notification/server/saving',
  never[]
>
