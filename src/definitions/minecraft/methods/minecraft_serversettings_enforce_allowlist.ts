import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get whether allowlist enforcement is enabled (kicks players immediately when removed from allowlist).
 */
export type MinecraftServersettingsEnforceAllowlist = MethodObjectDefinition<
  'minecraft:serversettings/enforce_allowlist',
  [],
  /** enforced */
  boolean
>
