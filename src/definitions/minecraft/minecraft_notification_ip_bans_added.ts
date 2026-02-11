import type { IpBanObject } from '../../json_rpc/schema/components/schemas/ip_ban_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Ip was added to ip ban list
 */
export type MinecraftNotificationIpBansAdded = MethodObject<
  'minecraft:notification/ip_bans/added',
  [{ player : IpBanObject }]
>
