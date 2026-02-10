export interface MethodObject<
  Name extends string,
  Params extends unknown[] = unknown[],
  Result = unknown
> {
  name : Name,
  params : Params,
  result : Result
}
