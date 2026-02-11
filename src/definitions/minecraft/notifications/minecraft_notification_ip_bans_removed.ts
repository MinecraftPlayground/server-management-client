import type { NotificationObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Ip was removed from ip ban list
 */
export type MinecraftNotificationIpBansRemoved = NotificationObjectDefinition<
  'minecraft:notification/ip_bans/removed',
  [{ player : string }]
>
