import type { IpBanObject } from '../schemas.ts';
import type { NotificationObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Ip was added to ip ban list
 */
export type MinecraftNotificationIpBansAdded = NotificationObjectDefinition<
  'minecraft:notification/ip_bans/added',
  [{ player : IpBanObject }]
>
