import type { ErrorObject } from './json_rpc/communication/error_object.ts';


export interface PendingRequest<Result> {
  resolve : (result : Result) => void,
  reject : (error : ErrorObject) => void
}
