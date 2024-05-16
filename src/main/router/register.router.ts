import { Router } from "express";
import { registerFactor } from "../factors/controller/register-controller.factor";
import { RegisterControllerAdapter } from "../adapter/controller/regiter-controller.adapter";
export const registerRouter = Router();

const registerAdapter = new RegisterControllerAdapter(registerFactor());

registerRouter.post("/registration", registerAdapter.add());
