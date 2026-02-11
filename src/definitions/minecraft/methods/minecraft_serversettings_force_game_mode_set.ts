import type { MethodObjectDefinition } from '../../../json_rpc/schema/index.ts';


/**
 * Enable or disable forcing players to use the server's default game mode
 */
export type MinecraftServersettingsForceGameModeSet = MethodObjectDefinition<
  'minecraft:serversettings/force_game_mode/set',
  [{ force : boolean }],
  { forced? : boolean }
>
