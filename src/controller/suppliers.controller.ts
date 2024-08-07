import { Request, Response } from "express";
import db from "../database/prisma.connection";

class SuppliersController {
  public async create(req: Request, res: Response) {
    const { email, name, rating } = req.body;
    try {
      await db.suppliers.create({
        data: {
          email,
          name,
          rating,
        },
      });
      res.status(200).json({ msg: "Suppliers created" });
    } catch (error) {
      res.status(200).json({ error: error });
    }
  }
  public async list(req: Request, res: Response) {
    try {
      const suppliers = await db.suppliers.findMany();
      return res.status(200).json({ data: suppliers });
    } catch (error) {
      res.status(200).json({ error: error });
    }
  }
}

export default SuppliersController;
