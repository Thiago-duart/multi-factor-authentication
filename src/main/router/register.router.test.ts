import "reflect-metadata";
import { DataSource, Repository } from "typeorm";
import { User } from "../../infra/postgres/entities";
import app from "../app/app";
import request from "supertest";
import { AppDataSource } from "../../infra/postgres/database/data-soucer";

describe("resgister router", () => {
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

  test("must return a body containing id name email", async () => {
    const response = await request(app).post("/auth/registration").send({
      email: "valid-email",
      name: "valid-name",
      password: "valid-password",
    });
    expect(response.body.id).toBeTruthy();
    expect(response.body.name).toBeTruthy();
    expect(response.body.email).toBeTruthy();
  });
});
