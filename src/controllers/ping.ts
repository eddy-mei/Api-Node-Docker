interface PingResponse {
  message: string;
}

export default class PingController {
  public async getMessage(msg?:string): Promise<PingResponse> {
    return {
      message: msg||"ping",
    };
  }
}