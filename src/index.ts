import express, { Request, Response } from "express";
import * as dotenv from "dotenv";

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
