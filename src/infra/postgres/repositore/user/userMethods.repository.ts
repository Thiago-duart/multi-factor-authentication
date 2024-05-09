import { DataSource, Repository } from "typeorm";
import {
  IUserData,
  IUserMethodsRepository,
} from "../../../../data/interface/userMethods.repository";
import { IUserModel } from "../../../../domain/models/user-model";
import { User } from "../../entity/user.entity";

export class UserMethodsRepository implements IUserMethodsRepository {
  private readonly userRepository: Repository<User>;
  constructor(private readonly appDataSource: DataSource) {
    this.appDataSource = appDataSource;
    this.userRepository = this.appDataSource.getRepository(User);
  }
  async add(userData: IUserData): Promise<IUserModel> {
    const newUser = await this.userRepository.save(userData);
    return newUser;
  }
}
