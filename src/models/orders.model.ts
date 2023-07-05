import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { Order } from '../types';

export default async function getAll() : Promise<Order[]> {
  const query = `SELECT o.id,
  o.user_id as userId,
  JSON_ARRAYAGG(p.id) as productsIds
  FROM Trybesmith.orders as o
  INNER JOIN Trybesmith.products as p
  ON o.id = p.order_id
  GROUP BY p.order_id`;

  const [result] = await connection.execute<Order[] & RowDataPacket[]>(query);
  
  return result;
}
