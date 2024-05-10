import "reflect-metadata";
import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "../entity/user.entity";

export const postgresTest = new DataSource({
  type: "postgres",
  host: process.env.dev_host,
  port: +process.env.dev_port,
  username: process.env.dev_username,
  password: process.env.dev_password,
  database: process.env.dev_database,
  entities: [User],
  migrations: ["./src/infra/postgres/migrations/*.ts"],
  synchronize: false,
  logging: true,
});
