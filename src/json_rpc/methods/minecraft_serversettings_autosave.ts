import type { MethodObject } from '../method_object.ts';


/**
 * Get whether automatic world saving is enabled on the server
 */
export type MinecraftServersettingsAutosave = MethodObject<
  'minecraft:serversettings/autosave',
  never[],
  { enabled? : boolean }
>
