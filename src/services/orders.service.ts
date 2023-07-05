import * as ordersModel from '../models/orders.model';

export default async function getAll() {
  const orders = await ordersModel.default();

  return orders;
}
