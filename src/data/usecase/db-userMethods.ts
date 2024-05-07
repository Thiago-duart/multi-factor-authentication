import { IUserModel } from "../../domain/models/user-model";
import { IUserData, IUserMethods } from "../../domain/usecase/user-usecase";
import { IUserMethodsRepositore } from "../interface/userMethods.repositore";

export class DbUserMethods implements IUserMethods {
  constructor(private readonly userMethodsRepositore: IUserMethodsRepositore) {}
  async add(userData: IUserData): Promise<IUserModel> {
    const user = await this.userMethodsRepositore.add(userData);
    return user;
  }
}
