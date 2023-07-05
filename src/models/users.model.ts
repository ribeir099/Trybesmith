import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import createToken from '../utils/tokenJWT';

export default async function create(
  username: string,
  vocation: string,
  level: number,
  password: string,
): Promise<string> {
  const query = `INSERT 
  INTO Trybesmith.users (username, vocation, level, password) 
  VALUES (?,?,?,?);`;
  const [result] = await connection.execute<ResultSetHeader>(
    query,
    [username, vocation, level, password],
  );

  const payload = {
    id: result.insertId,
    username,
  };

  const token = createToken(payload);

  return token;
}