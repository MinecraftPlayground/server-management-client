import type { ErrorObject } from './error_object.ts';

export type ResponseObject = {
  jsonrpc : '2.0',
  result? : unknown,
  id : string | number | null
} | {
  jsonrpc : '2.0',
  error : ErrorObject,
  id : string | number | null
}
