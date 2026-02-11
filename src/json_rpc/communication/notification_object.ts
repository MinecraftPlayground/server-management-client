export interface NotificationObject {
  jsonrpc : '2.0',
  method : string,
  params? : unknown
  id? : never
}
