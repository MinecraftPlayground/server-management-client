import type { PlayerObject } from './player_object.ts';

export interface IncomingIpBanObject {
  expires? : string,
  ip? : string,
  player? : PlayerObject,
  reason? : string,
  source? : string
}
