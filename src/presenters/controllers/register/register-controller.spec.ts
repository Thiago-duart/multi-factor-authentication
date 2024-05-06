import { IUserMethods } from "./";
import { RegisterController } from "./register-controller";

describe("", () => {
  const makeSut = () => {
    class UserMethodsStub implements IUserMethods {
      add(userData: any): any {}
    }
    const userMethods = new UserMethodsStub();
    const sut = new RegisterController(userMethods);
    return {
      userMethods,
      sut,
    };
  };
  test("must call user methods with data from the request body", () => {
    const { userMethods, sut } = makeSut();
    const user = {
      body: {
        name: "valid-name",
        email: "valid-email",
        password: "valid-password",
      },
    };
    const userMethodsSpy = jest.spyOn(userMethods, "add");
    sut.handle(user);
    expect(userMethodsSpy).toHaveBeenCalledWith(user.body);
  });
});
