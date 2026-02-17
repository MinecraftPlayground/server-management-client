import type { NotificationObject } from './notification_object.ts';
import type { ResponseObject } from './response_object.ts';

export function isNotificationObject(data : ResponseObject | NotificationObject) : boolean {
  return !('id' in data) || data.id === undefined
}
