import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "../entity/user.entity";

export const postgresProduction = new DataSource({
  type: "postgres",
  host: process.env.host,
  port: +process.env.port,
  username: process.env.username,
  password: process.env.password,
  database: process.env.database,
  entities: [User],
  migrations: ["./src/infra/postgres/migration/*.ts"],
  synchronize: false,
  logging: false,
  migrationsRun: true,
});
