import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Get whether players are forced to use the server's default game mode
 */
export type MinecraftServersettingsForceGameMode = MethodObjectDefinition<
  'minecraft:serversettings/force_game_mode',
  never[],
  { forced? : boolean }
>
