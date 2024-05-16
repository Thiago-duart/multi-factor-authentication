import "reflect-metadata";
import express, { Application, json } from "express";
import { registerRouter } from "../router/register.router";
import cors from "cors";
const app: Application = express();
app.use(json(), cors());
app.use("/auth", registerRouter);

export default app;
