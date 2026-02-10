import type { MessageObject } from './message_object.ts';
import type { PlayerObject } from './player_object.ts';

export interface SystemMessageObject {
  message? : MessageObject,
  overlay? : boolean,
  receivingPlayers? : PlayerObject[]
}
