import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Get whether the allowlist is enabled on the server
 */
export type MinecraftServersettingsUseAllowlist = MethodObjectDefinition<
  'minecraft:serversettings/use_allowlist',
  never[],
  { used? : boolean }
>
