import type { MethodObject } from '../method_object.ts';


/**
 * Stop server
 */
export type MinecraftServerStop = MethodObject<
  'minecraft:server/stop',
  never[],
  { stopping? : boolean }
>
