import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Get whether allowlist enforcement is enabled (kicks players immediately when removed from allowlist)
 */
export type MinecraftServersettingsEnforceAllowlist = MethodObject<
  'minecraft:serversettings/enforce_allowlist',
  never[],
  { enforced? : boolean }
>
