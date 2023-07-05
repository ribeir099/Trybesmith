import { Request, Response } from 'express';
import * as productsService from '../services/products.service';

export async function getAll(_req: Request, res: Response) {
  const products = await productsService.getAll();

  res.status(200).json(products);
}

export async function create(req: Request, res: Response) {
  const newProduct = await productsService.create(req.body);

  res.status(201).json(newProduct);
}