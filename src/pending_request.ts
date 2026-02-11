import type { ErrorObject } from './json_rpc/error_object.ts';


export interface PendingRequest<Result> {
  resolve : (result : Result) => void,
  reject : (error : ErrorObject) => void
}
