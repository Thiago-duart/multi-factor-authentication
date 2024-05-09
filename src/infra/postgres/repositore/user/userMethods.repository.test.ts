import { DataSource, Repository } from "typeorm";
import { User } from "../../entity/user.entity";
import { postgresTest } from "../../helper/db-test-connection";
import { UserMethodsRepository } from "./userMethods.repository";

describe("userMethods.repositore", () => {
  let client: DataSource;
  let repository: Repository<User>;
  function makeSut() {
    const sut = new UserMethodsRepository(client);
    return sut;
  }
  beforeAll(async () => {
    client = await postgresTest.initialize();
    repository = client.getRepository(User);
    console.log("connectado");
  });

  afterAll(async () => {
    repository.clear();
    await client.destroy();
    console.log("desconectado");
  });

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
