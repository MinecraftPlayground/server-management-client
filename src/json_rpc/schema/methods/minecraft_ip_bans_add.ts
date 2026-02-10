import type { IncomingIpBanObject } from '../components/schemas/incoming_ip_ban_object.ts';
import type { IpBanObject } from '../components/schemas/ip_ban_object.ts';
import type { MethodObject } from '../method_object.ts';


/**
 * Add ip to ban list
 */
export type MinecraftIpBansAdd = MethodObject<
  'minecraft:ip_bans/add',
  [{ add : IncomingIpBanObject[] }],
  { banlist? : IpBanObject[] }
>
