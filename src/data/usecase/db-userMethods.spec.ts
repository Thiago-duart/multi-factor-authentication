import { IUserModel } from "../../domain/models/user-model";
import {
  IUserData,
  IUserMethodsRepositore,
} from "../interface/userMethods.repositore";
import { DbUserMethods } from "./db-userMethods";

describe("db-userMethods", () => {
  function makeSut() {
    class UserMethodsRepositoreStub implements IUserMethodsRepositore {
      async add(userData: IUserData): Promise<IUserModel> {
        return;
      }
    }
    const userMethodsRepositoreStub = new UserMethodsRepositoreStub();
    const sut = new DbUserMethods(userMethodsRepositoreStub);
    return { userMethodsRepositoreStub, sut };
  }
  test("must call userMethodsRepositore with parameter data", async () => {
    const { userMethodsRepositoreStub, sut } = makeSut();
    const user = {
      body: {
        name: "valid-name",
        email: "valid-email",
        password: "valid-password",
      },
    };
    const userMethodsSpy = jest.spyOn(userMethodsRepositoreStub, "add");
    await sut.add(user.body);
    expect(userMethodsSpy).toHaveBeenCalledWith(user.body);
  });
});
