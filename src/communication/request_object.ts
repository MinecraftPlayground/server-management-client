export interface RequestObject {
  jsonrpc : '2.0',
  method : string,
  params? : unknown,
  id : string | number | null
}
