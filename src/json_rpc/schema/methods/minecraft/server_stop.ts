import type { MethodObject } from '../../method_object.ts';


/**
 * Stop server
 */
export type ServerStop = MethodObject<
  'minecraft:server/stop',
  never[],
  { stopping? : boolean }
>
