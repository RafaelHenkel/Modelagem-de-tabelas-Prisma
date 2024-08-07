import { Request, Response } from "express";
import db from "../database/prisma.connection";

class UsersController {
  public async create(req: Request, res: Response) {
    const { email, name, password, years, github } = req.body;
    console.log(req.body);

    try {
      await db.users.create({
        data: {
          email,
          name,
          password,
          years,
          github,
        },
      });
      res.status(200).json({ msg: "Users created" });
    } catch (error) {
      res.status(200).json({ error: error });
    }
  }
  public async list(req: Request, res: Response) {
    try {
      const users = await db.users.findMany();
      return res
        .status(200)
        .json({ data: users.filter((item) => item.name.includes("maria")) });
    } catch (error) {
      res.status(200).json({ error: error });
    }
  }
}

export default UsersController;
