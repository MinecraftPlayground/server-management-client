import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Set the interval in seconds between server status heartbeats
 */
export type MinecraftServersettingsStatusHeartbeatIntervalSet = MethodObject<
  'minecraft:serversettings/status_heartbeat_interval/set',
  [{ seconds : number }],
  { seconds? : number }
>
