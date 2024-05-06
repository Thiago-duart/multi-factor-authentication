import { IUserModel } from "../models/user-model";

export interface IUserData {
  name: string;
  email: string;
  password: string;
}
export interface IUserMethods {
  add(userData: IUserData): Promise<IUserModel>;
}
