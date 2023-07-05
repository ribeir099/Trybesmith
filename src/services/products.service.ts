import * as productsModel from '../models/products.model';
import { NewProduct } from '../types';

export async function getAll() {
  const products = await productsModel.getAll();

  return products;
}

export async function create(body: NewProduct) {
  const { name, amount } = body;

  const product = await productsModel.create(name, amount);

  return product;
}