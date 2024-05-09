import "reflect-metadata";
import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "../entity/user.entity";

export const postgresTest = new DataSource({
  type: "postgres",
  host: process.env.test_host,
  port: +process.env.test_port,
  username: process.env.test_username,
  password: process.env.test_password,
  database: process.env.test_database,
  entities: [User],
  migrations: ["./src/infra/postgres/migrations/*.ts"],
  synchronize: false,
  logging: true,
});
