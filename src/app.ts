import express, { Request, Response } from "express";
import { ProductRoutes } from "./modules/products/product.route";
const app = express();

app.use("/api/products", ProductRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next!");
});

export default app;
