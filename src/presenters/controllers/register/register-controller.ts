import { IUserMethods, IControllers, IHttpResponse } from "./";

export class RegisterController implements IControllers {
  constructor(private readonly userMethods: IUserMethods) {}
  async handle(request: any): Promise<IHttpResponse> {
    const user = await this.userMethods.add(request.body);
    return { statusCode: 200, body: {} };
  }
}
