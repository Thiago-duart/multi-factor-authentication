import { IControllers } from "../../../presenters/interfaces/controller";
import { Request, Response } from "express";
import "reflect-metadata";
export class RegisterControllerAdapter {
  constructor(private readonly registerController: IControllers) {
    this.registerController = registerController;
  }
  add() {
    return async (req: Request, res: Response) => {
      const { statusCode, body } = await this.registerController.handle(req);
      res.status(statusCode).json(body);
    };
  }
}
