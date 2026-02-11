import type { MethodObject } from '../../method_object.ts';


/**
 * Get whether allowlist enforcement is enabled (kicks players immediately when removed from allowlist)
 */
export type ServersettingsEnforceAllowlist = MethodObject<
  'minecraft:serversettings/enforce_allowlist',
  never[],
  { enforced? : boolean }
>
