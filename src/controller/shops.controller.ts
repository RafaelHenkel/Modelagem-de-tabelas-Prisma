import { Request, Response } from "express";
import db from "../database/prisma.connection";

class ShopsController {
  public async create(req: Request, res: Response) {
    const { cnpj, name, address, branches, phone } = req.body;
    try {
      await db.shops.create({
        data: {
          address,
          branches,
          cnpj,
          name,
          phone,
        },
      });
      res.status(200).json({ msg: "Shops created" });
    } catch (error) {
      res.status(200).json({ error: error });
    }
  }
  public async list(req: Request, res: Response) {
    try {
      const shops = await db.shops.findMany();
      return res.status(200).json({
        data: shops.filter((item) => item.branches > 1),
      });
    } catch (error) {
      res.status(200).json({ error: error });
    }
  }
}

export default ShopsController;
