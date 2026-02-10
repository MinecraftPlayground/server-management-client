import type { MethodObject } from '../method_object.ts';

/**
 * Enable or disable allowlist enforcement (when enabled, players are kicked immediately upon removal from allowlist)
 */
export type MinecraftServersettingsEnforceAllowlistSet = MethodObject<
  'minecraft:serversettings/enforce_allowlist/set',
  [{ enforce : boolean }],
  { enforced : boolean }
>
