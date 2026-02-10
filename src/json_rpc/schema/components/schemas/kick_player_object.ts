import type { MessageObject } from './message_object.ts';
import type { PlayerObject } from './player_object.ts';

export interface KickPlayerObject {
  message? : MessageObject,
  player? : PlayerObject
}
