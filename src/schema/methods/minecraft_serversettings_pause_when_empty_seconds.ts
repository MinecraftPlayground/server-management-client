import type { MethodObject } from '../method_object.ts';


/**
 * Get the number of seconds before the game is automatically paused when no players are online
 */
export type MinecraftServersettingsPauseWhenEmptySeconds = MethodObject<
  'minecraft:serversettings/pause_when_empty_seconds',
  never[],
  { seconds : number }
>
