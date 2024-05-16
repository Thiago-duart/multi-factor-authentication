import "reflect-metadata";
import { DataSource } from "typeorm";
import { AppDataSource } from "./data-soucer";

describe("db-test-connection", () => {
  let client: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (client = res))
      .catch((error) => console.error(error));
  });

  afterAll(async () => {
    await client.destroy();
  });

  test("Should connect", () => {
    expect(client).toBeTruthy();
  });
});
