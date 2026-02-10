import type { IpBanObject } from '../components/schemas/ip_ban_object.ts';
import type { MethodObject } from '../method_object.ts';


/**
 * Ip was added to ip ban list
 */
export type MinecraftNotificationIpBansAdded = MethodObject<
  'minecraft:notification/ip_bans/added',
  [{ player : IpBanObject }]
>
