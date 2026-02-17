import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Enable or disable the allowlist on the server (controls whether only allowlisted players can join).
 */
export type MinecraftServersettingsUseAllowlistSet = MethodObjectDefinition<
  'minecraft:serversettings/use_allowlist/set',
  [{ use : boolean }],
  /** used */
  boolean
>
