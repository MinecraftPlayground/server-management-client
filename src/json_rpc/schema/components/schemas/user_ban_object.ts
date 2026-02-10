import type { PlayerObject } from './player_object.ts';

export interface UserBanObject {
  expires? : string,
  player? : PlayerObject,
  reason? : string,
  source? : string
}
