import { Request, Response } from 'express';
import * as ordersService from '../services/orders.service';

export default async function getAll(_req: Request, res: Response) {
  const orders = await ordersService.default();

  res.status(200).json(orders);
}
