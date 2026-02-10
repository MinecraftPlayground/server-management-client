import type { PlayerObject } from './player_object.ts';

export interface OperatorObject {
  bypassesPlayerLimit? : boolean,
  permissionLevel? : number,
  player? : PlayerObject
}
