import type { MethodObject } from '../../method_object.ts';


/**
 * Ip was removed from ip ban list
 */
export type NotificationIpBansRemoved = MethodObject<
  'minecraft:notification/ip_bans/removed',
  [{ player : string }]
>
