import type { IncomingIpBanObject } from '../../json_rpc/schema/components/schemas/incoming_ip_ban_object.ts';
import type { IpBanObject } from '../../json_rpc/schema/components/schemas/ip_ban_object.ts';
import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Add ip to ban list
 */
export type MinecraftIpBansAdd = MethodObject<
  'minecraft:ip_bans/add',
  [{ add : IncomingIpBanObject[] }],
  { banlist? : IpBanObject[] }
>
