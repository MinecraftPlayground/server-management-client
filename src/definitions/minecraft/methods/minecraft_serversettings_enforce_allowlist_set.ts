import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Enable or disable allowlist enforcement (when enabled, players are kicked immediately upon removal from allowlist)
 */
export type MinecraftServersettingsEnforceAllowlistSet = MethodObjectDefinition<
  'minecraft:serversettings/enforce_allowlist/set',
  [{ enforce : boolean }],
  { enforced? : boolean }
>
