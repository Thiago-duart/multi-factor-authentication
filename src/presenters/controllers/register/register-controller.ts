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
      const { name, email, id } = await this.userMethods.add({
        ...request.body,
        password: hashPassword,
      });
      return { statusCode: 201, body: { name, email, id } };
    } catch (error) {
      console.error("controller >> ", error);
      return { statusCode: 500, body: { message: "internal server error" } };
    }
  }
}
