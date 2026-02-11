import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Ip was removed from ip ban list
 */
export type MinecraftNotificationIpBansRemoved = MethodObject<
  'minecraft:notification/ip_bans/removed',
  [{ player : string }]
>
