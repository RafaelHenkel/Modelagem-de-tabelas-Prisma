import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import UsersController from "./controller/users.controller";
import ProductsController from "./controller/products.controller";
import ShopsController from "./controller/shops.controller";
import SuppliersController from "./controller/suppliers.controller";

dotenv.config();

const app = express();

app.use(express.json());

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server is running...");
});

//ROUTES
app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ success: true, msg: "Server is running!" });
});

const usersController = new UsersController();
const productsController = new ProductsController();
const shopsController = new ShopsController();
const suppliersController = new SuppliersController();

//USERS
app.post("/users", usersController.create);
app.get("/users", usersController.list);

//PRODUCTS
app.post("/products", productsController.create);
app.get("/products", productsController.list);

//SHOPS
app.post("/shops", shopsController.create);
app.get("/shops", shopsController.list);

//SUPPLIERS
app.post("/suppliers", suppliersController.create);
app.get("/suppliers", suppliersController.list);
