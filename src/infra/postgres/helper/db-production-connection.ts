import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";
import { User } from "../entity/user.entity";

export const postgresProduction = new DataSource({
  type: "postgres",
  host: process.env.prod_host,
  port: +process.env.prod_port,
  username: process.env.prod_username,
  password: process.env.prod_password,
  database: process.env.prod_database,
  entities: [User],
  migrations: ["./src/infra/postgres/migration/*.ts"],
  synchronize: false,
  logging: false,
  migrationsRun: true,
});
