import type { Definition } from './definition.ts';

export interface NotificationObjectDefinition<
  Name extends string = string,
  Params extends unknown[] = unknown[],
  Result = unknown
> extends Definition<Name, Params, Result> {
  type : 'notification'
}
