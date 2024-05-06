import { IUserModel } from "../models/user-model";

export interface IUserData {
  email: string;
  password: string;
}
export interface IUserMethods {
  add(userData: IUserData): Promise<IUserModel>;
}
