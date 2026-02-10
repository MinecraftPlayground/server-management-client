import type { PlayerObject } from './player_object.ts';
import type { VersionObject } from './version_object.ts';

export interface ServerStateObject {
  player? : PlayerObject[],
  started? : boolean,
  version? : VersionObject
}
