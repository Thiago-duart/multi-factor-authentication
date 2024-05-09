import "reflect-metadata";
import { DataSource } from "typeorm";
import { postgresTest } from "./db-test-connection";

describe("db-test-connection", () => {
  let client: DataSource;
  beforeAll(async () => {
    client = await postgresTest.initialize();
    console.log("connected");
  });
  afterAll(async () => {
    await client.destroy();
    console.log("disconnected");
  });
  test("Should connect to PostgreSQL", () => {
    expect(client).toBeTruthy();
  });
});
