import type { ExtractParams, ExtractResult, MethodObjectDefinition, NotificationObjectDefinition, ParamsNever } from './json_rpc/schema/index.ts';
import type { minecraft } from './definitions/index.ts';


export class Client<Definitions extends MethodObjectDefinition | NotificationObjectDefinition = minecraft.methods.All> {
  private requestId : number = 0;
  constructor() {

  }

  public call<MethodName extends Definitions['name']>(
    method : MethodName,
    ...params : ParamsNever<ExtractParams<Definitions, MethodName>>
  ) : Promise<ExtractResult<Definitions, MethodName>> {
    const id = ++this.requestId;

    return new Promise((resolve, reject) => {
      
    });
  }

  public notification<MethodName extends Extract<Definitions, NotificationObjectDefinition>['name']>(
    method : MethodName,
    listener : (...params : ExtractParams<Definitions, MethodName>) => void
  ) : void {
    
  }
}
