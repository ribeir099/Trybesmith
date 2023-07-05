import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { Product, NewProduct } from '../types';

export async function getAll(): Promise<Product[]> {
  const query = 'SELECT * FROM Trybesmith.products;';
  const [result] = await connection.execute<Product[] & RowDataPacket[]>(query);

  return result;
}

export async function create(name: string, amount: string): Promise<NewProduct> {
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?);';
  const [result] = await connection.execute<ResultSetHeader>(query, [name, amount]);

  const newProduct = {
    id: result.insertId,
    name,
    amount,
  };

  return newProduct;
}
