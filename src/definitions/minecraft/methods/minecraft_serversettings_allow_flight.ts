import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get whether flight is allowed for players in Survival mode.
 */
export type MinecraftServersettingsAllowFlight = MethodObjectDefinition<
  'minecraft:serversettings/allow_flight',
  [],
  /** allowed */
  boolean
>
