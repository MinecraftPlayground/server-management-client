import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Get the entity broadcast range as a percentage
 */
export type MinecraftServersettingsEntityBroadcastRange = MethodObject<
  'minecraft:serversettings/entity_broadcast_range',
  never[],
  { percentage_points? : number }
>
