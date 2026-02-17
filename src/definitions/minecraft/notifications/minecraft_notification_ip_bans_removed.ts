import type { NotificationObjectDefinition } from '../../../schema/index.ts';


/**
 * Ip was removed from ip ban list
 */
export type MinecraftNotificationIpBansRemoved = NotificationObjectDefinition<
  'minecraft:notification/ip_bans/removed',
  [{ player : string }]
>
