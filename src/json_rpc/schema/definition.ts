export interface Definition<
  Name extends string = string,
  Params extends unknown[] = unknown[],
  Result = unknown
> {
  name : Name,
  params : Params,
  result : Result
}
