import type { Definition } from './definition.ts';

export interface MethodObjectDefinition<
  Name extends string = string,
  Params extends unknown[] = unknown[],
  Result = unknown
> extends Definition<Name, Params, Result> {
  type : 'method'
}
