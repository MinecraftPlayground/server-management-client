import type { ErrorObject } from './error_object.ts';

/**
 * Represents a pending request
 * 
 * @template Result Result for the resolve method
 */
export interface PendingRequest<Result> {
  resolve : (result : Result) => void,
  reject : (error : ErrorObject) => void
}
