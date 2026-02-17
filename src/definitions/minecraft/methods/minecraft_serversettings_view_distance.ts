import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get the server's view distance in chunks.
 */
export type MinecraftServersettingsViewDistance = MethodObjectDefinition<
  'minecraft:serversettings/view_distance',
  [],
  /** distance */
  number
>
