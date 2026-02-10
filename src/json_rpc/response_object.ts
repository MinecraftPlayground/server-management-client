export interface ResponseObject {
  jsonrpc : '2.0',
  result? : unknown,
  error? : {
    code : number,
    message : string,
    data? : unknown
  },
  id : string | number | null
}
