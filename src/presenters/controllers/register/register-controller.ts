import { IUserMethods, IControllers, IHttpResponse, IEncrypter } from "./";

export class RegisterController implements IControllers {
  constructor(
    private readonly userMethods: IUserMethods,
    private readonly EncrypterAdapter: IEncrypter
  ) {}
  async handle(request: any): Promise<IHttpResponse> {
    try {
      const hashPassword = await this.EncrypterAdapter.encrypt(
        request.body.password
      );
      const user = await this.userMethods.add({
        ...request.body,
        password: hashPassword,
      });
      return { statusCode: 200, body: {} };
    } catch (error) {
      return { statusCode: 500, body: { message: "internal server error" } };
    }
  }
}
