import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Set the interval in seconds between server status heartbeats
 */
export type MinecraftServersettingsStatusHeartbeatIntervalSet = MethodObjectDefinition<
  'minecraft:serversettings/status_heartbeat_interval/set',
  [{ seconds : number }],
  { seconds? : number }
>
