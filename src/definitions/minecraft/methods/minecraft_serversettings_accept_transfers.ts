import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get whether the server accepts player transfers from other servers.
 */
export type MinecraftServersettingsAcceptTransfers = MethodObjectDefinition<
  'minecraft:serversettings/accept_transfers',
  [],
  /** accepted */
  boolean
>
