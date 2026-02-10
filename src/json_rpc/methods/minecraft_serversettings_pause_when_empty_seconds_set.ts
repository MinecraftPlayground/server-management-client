import type { MethodObject } from '../method_object.ts';


/**
 * Set the number of seconds before the game is automatically paused when no players are online
 */
export type MinecraftServersettingsPauseWhenEmptySecondsSet = MethodObject<
  'minecraft:serversettings/pause_when_empty_seconds/set',
  [{ seconds : number }],
  { seconds? : number }
>
