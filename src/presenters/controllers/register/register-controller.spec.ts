import { IUserMethods, IEncrypter } from "./";
import { RegisterController } from "./register-controller";

describe("register", () => {
  const makeSut = () => {
    class UserMethodsStub implements IUserMethods {
      add(userData: any): any {
        return true;
      }
    }
    class EncrypterStub implements IEncrypter {
      async encrypt(password: string): Promise<string> {
        return password;
      }
    }
    const userMethodsStub = new UserMethodsStub();
    const encrypterStub = new EncrypterStub();
    const sut = new RegisterController(userMethodsStub, encrypterStub);
    return {
      userMethodsStub,
      sut,
      encrypterStub,
    };
  };
  test("must call user methods with data from the request body", async () => {
    const { userMethodsStub, sut } = makeSut();
    const user = {
      body: {
        name: "valid-name",
        email: "valid-email",
        password: "valid-password",
      },
    };
    const userMethodsSpy = jest.spyOn(userMethodsStub, "add");
    await sut.handle(user);
    expect(userMethodsSpy).toHaveBeenCalledWith(user.body);
  });
  test("must call encrypterAdapter with password from body ", () => {
    const { encrypterStub, sut } = makeSut();
    const user = {
      body: {
        name: "valid-name",
        email: "valid-email",
        password: "valid-password",
      },
    };
    const encryptSpy = jest.spyOn(encrypterStub, "encrypt");
    sut.handle(user);
    expect(encryptSpy).toHaveBeenCalledWith(user.body.password);
  });
});
