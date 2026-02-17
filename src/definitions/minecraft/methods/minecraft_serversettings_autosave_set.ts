import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Enable or disable automatic world saving on the server.
 */
export type MinecraftServersettingsAutosaveSet = MethodObjectDefinition<
  'minecraft:serversettings/autosave/set',
  [{ enable : boolean }],
  /** enabled */
  boolean
>
