import "reflect-metadata";
import { postgresProduction } from "../../src/infra/postgres/helper/db-production-connection";
import { postgresTest } from "../../src/infra/postgres/helper/db-test-connection";
import app from "./app/app";

const port = +process.env.PORT_APP || 3000;

if (process.env.NODE_ENV === "dev") {
  postgresTest
    .initialize()
    .then(() => {
      app.listen(port, () => {
        console.log(`app start db-test on port ${port}`);
      });
    })
    .catch((err) => console.log(err));
} else {
  postgresProduction
    .initialize()
    .then(() => {
      app.listen(port, () => {
        console.log(`app start db-test on port ${port}`);
      });
    })
    .catch((err) => console.log(err));
}
