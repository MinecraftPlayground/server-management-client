import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Get whether automatic world saving is enabled on the server
 */
export type MinecraftServersettingsAutosave = MethodObjectDefinition<
  'minecraft:serversettings/autosave',
  never[],
  { enabled? : boolean }
>
