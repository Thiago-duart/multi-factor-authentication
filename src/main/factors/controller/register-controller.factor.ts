import { EncrypterAdapter } from "../../../infra/encrypt/encrypter-adapter";
import { UserMethodsRepository } from "../../../infra/postgres/repositore/user/userMethods.repository";
import { RegisterController } from "../../../presenters/controllers/register/register-controller";
import { AppDataSource } from "../../../infra/postgres/database/data-soucer";

export function registerFactor() {
  const encrypterAdapter = new EncrypterAdapter();
  const userMethods = new UserMethodsRepository(AppDataSource);
  const registerControlle = new RegisterController(
    userMethods,
    encrypterAdapter
  );
  return registerControlle;
}
