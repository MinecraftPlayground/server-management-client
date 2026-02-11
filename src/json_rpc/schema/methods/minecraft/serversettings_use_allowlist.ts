import type { MethodObject } from '../../method_object.ts';


/**
 * Get whether the allowlist is enabled on the server
 */
export type ServersettingsUseAllowlist = MethodObject<
  'minecraft:serversettings/use_allowlist',
  never[],
  { used? : boolean }
>
