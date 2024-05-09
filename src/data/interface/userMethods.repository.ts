import { IUserModel } from "../../domain/models/user-model";

export interface IUserData {
  name: string;
  email: string;
  password: string;
}
export interface IUserMethodsRepository {
  add(userData: IUserData): Promise<IUserModel>;
}
