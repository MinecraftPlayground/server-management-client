import type { NotificationObject } from './notification_object.ts';
import type { ResponseObject } from './response_object.ts';

export function parseMessageEventData(data : string) : ResponseObject | NotificationObject {
  let rawData : Record<string, unknown> = {};
  try {
    rawData = JSON.parse(data);
  } catch (error) {
    console.log('Error while parsing message event data.', error);
    throw new Error('Invalid JSON data');
  }

  if (rawData.jsonrpc !== '2.0') {
    throw new Error('Invalid JSON-RPC version. Expected "2.0"');
  }

  if (!('id' in rawData)) {
    if (typeof rawData.method !== 'string') {
      throw new Error('Notification must have a method property');
    }

    return {
      jsonrpc: '2.0',
      method: rawData.method,
      params: rawData.params
    } satisfies NotificationObject;
  }

  const id = rawData.id;
  
  if (typeof id !== 'string' && typeof id !== 'number' && id !== null) {
    throw new Error('Response id must be a string, number, or null');
  }

  if ('error' in rawData) {
    const error = rawData.error;
    
    if (typeof error !== 'object' || error === null) {
      throw new Error('Error must be an object');
    }
    
    const errorObj = error as Record<string, unknown>;
    
    if (typeof errorObj.code !== 'number' || typeof errorObj.message !== 'string') {
      throw new Error('Error must have code (number) and message (string)');
    }

    return {
      jsonrpc: '2.0',
      error: {
        code: errorObj.code,
        message: errorObj.message,
        data: errorObj.data
      },
      id
    } satisfies ResponseObject;
  }

  return {
    jsonrpc: '2.0',
    result: rawData.result,
    id
  } satisfies ResponseObject;
}
