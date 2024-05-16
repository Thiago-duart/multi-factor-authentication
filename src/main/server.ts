import "reflect-metadata";
import app from "./app/app";
import { AppDataSource } from "../infra/postgres/database/data-soucer";

AppDataSource.initialize()
  .then(async () => {
    const PORT: number = +process.env.PORT! || 3000;
    app.listen(PORT, async (): Promise<void> => {
      console.log("app running on port ", PORT);
    });
  })
  .catch((err) => console.error(err));
