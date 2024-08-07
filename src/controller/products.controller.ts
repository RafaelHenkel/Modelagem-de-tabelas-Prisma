import { Request, Response } from "express";
import db from "../database/prisma.connection";

class ProductsController {
  public async create(req: Request, res: Response) {
    const { description, price, stock, product_type } = req.body;
    try {
      await db.products.create({
        data: {
          description,
          price,
          product_type,
          stock,
        },
      });
      res.status(200).json({ msg: "Products created" });
    } catch (error) {
      res.status(200).json({ error: error });
    }
  }
  public async list(req: Request, res: Response) {
    try {
      const products = await db.products.findMany();
      const filterType = products.filter(
        (item) => item.product_type === "alimentação"
      );
      const filterPrice = products.filter((item) => item.price > 10);
      const filterPriceOrder = products
        .filter((item) => item.available)
        .sort((a, b) => a.price - b.price);
      return res.status(200).json({
        data: products,
      });
    } catch (error) {
      res.status(200).json({ error: error });
    }
  }
}

export default ProductsController;

//MANEIRAS CERTAS DE SE FAZER PESQUISA, ----- AINDA NÃO APRENDEMOS -----
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function getAlimentos() {
//   const alimentos = await prisma.produto.findMany({
//     where: {
//       tipo: 'A',
//     },
//   });
//   console.log(alimentos);
// }

// getAlimentos();

// const produtos = await prisma.produto.findMany({
//     where: {
//       valor: {
//         gt: 10.00,
//       },
//     },
//   });
// const lojas = await prisma.loja.findMany({
//     where: {
//       OR: [
//         {
//           filial: {
//             gt: 1,
//           },
//         },
//         {
//           gerente: null,
//         },
//       ],
//     },
//   });
// const usuarios = await prisma.usuario.findMany({
//     where: {
//       nome: {
//         contains: 'maria',
//         mode: 'insensitive',
//       },
//     },
//   });
