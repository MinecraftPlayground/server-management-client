import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Enable or disable the allowlist on the server (controls whether only allowlisted players can join)
 */
export type MinecraftServersettingsUseAllowlistSet = MethodObject<
  'minecraft:serversettings/use_allowlist/set',
  [{ use : boolean }],
  { used? : boolean }
>
