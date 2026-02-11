import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Enable or disable automatic world saving on the server
 */
export type MinecraftServersettingsAutosaveSet = MethodObjectDefinition<
  'minecraft:serversettings/autosave/set',
  [{ enable : boolean }],
  { enabled? : boolean }
>
