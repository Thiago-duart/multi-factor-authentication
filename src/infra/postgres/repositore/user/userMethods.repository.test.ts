import { DataSource } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../database/data-soucer";
import { UserMethodsRepository } from "./userMethods.repository";

describe("userMethods.repositore", () => {
  let client: DataSource;
  const repository = AppDataSource.getRepository(User);

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (client = res))
      .catch((error) => console.error("connection error >>>>>>", error));
  });
  beforeEach(async () => {
    const userRepo: any = await repository.find();
    await repository.remove(userRepo);
  });

  afterAll(async () => {
    await client.destroy();
  });
  function makeSut() {
    const sut = new UserMethodsRepository(client);
    return sut;
  }
  test("must create an account", async () => {
    const sut = makeSut();
    const newUser = await sut.add({
      name: "valid-name",
      email: "valid-email",
      password: "valid-password",
    });
    expect(newUser).toBeTruthy();
  });
});
