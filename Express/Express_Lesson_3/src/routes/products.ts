import { Router, Request, Response } from "express";
import { products } from "../data/products";
import { Product } from "../models/product";

const router = Router();

/* GET /products - list all products */
router.get("/", (req: Request, res: Response) => {
  res.status(200).json(products);
});

/* GET /products/:id - get product by id */
router.get("/:id", (req: Request, res: Response) => {
  const product = products.find(p => p.id === req.params.id);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.status(200).json(product);
});

/* POST /products - create new product */
router.post("/", (req: Request, res: Response) => {
  const { name, price, inStock } = req.body;

  if (!name || price === undefined || inStock === undefined) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const newProduct: Product = {
    id: (products.length + 1).toString(),
    name,
    price,
    inStock,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

/* PUT /products/:id - replace entire product */
router.put("/:id", (req: Request, res: Response) => {
  const index = products.findIndex(p => p.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ error: "Product not found" });
  }

  const { name, price, inStock } = req.body;

  if (!name || price === undefined || inStock === undefined) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  products[index] = {
    id: req.params.id,
    name,
    price,
    inStock,
  };

  res.status(200).json(products[index]);
});

/* PATCH /products/:id/price - update only price */
router.patch("/:id/price", (req: Request, res: Response) => {
  const product = products.find(p => p.id === req.params.id);
  const { price } = req.body;

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  if (typeof price !== "number" || price < 0) {
    return res.status(400).json({ error: "Invalid price" });
  }

  product.price = price;
  res.status(200).json(product);
});

/* PATCH /products/:id/inStock - challenge solution */
router.patch("/:id/inStock", (req: Request, res: Response) => {
  const product = products.find(p => p.id === req.params.id);
  const { inStock } = req.body;

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  if (typeof inStock !== "boolean") {
    return res.status(400).json({ error: "Invalid inStock value" });
  }

  product.inStock = inStock;
  res.status(200).json(product);
});

/* DELETE /products/:id - delete product */
router.delete("/:id", (req: Request, res: Response) => {
  const index = products.findIndex(p => p.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ error: "Product not found" });
  }

  products.splice(index, 1);
  res.sendStatus(204);
});

export default router;
