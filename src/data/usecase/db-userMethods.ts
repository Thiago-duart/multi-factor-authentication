import { IUserModel } from "../../domain/models/user-model";
import { IUserData, IUserMethods } from "../../domain/usecase/user-usecase";
import { IUserMethodsRepository } from "../interface/userMethods.repository";

export class DbUserMethods implements IUserMethods {
  constructor(private readonly userMethodsRepository: IUserMethodsRepository) {}
  async add(userData: IUserData): Promise<IUserModel> {
    const user = await this.userMethodsRepository.add(userData);
    return user;
  }
}
