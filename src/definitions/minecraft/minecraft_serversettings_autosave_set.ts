import type { MethodObject } from '../../json_rpc/schema/method_object.ts';


/**
 * Enable or disable automatic world saving on the server
 */
export type MinecraftServersettingsAutosaveSet = MethodObject<
  'minecraft:serversettings/autosave/set',
  [{ enable : boolean }],
  { enabled? : boolean }
>
