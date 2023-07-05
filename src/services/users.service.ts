import * as usersModel from '../models/users.model';
import { NewUser } from '../types';

export default async function create(body: NewUser) {
  const { username, vocation, level, password } = body;

  const product = await usersModel.default(username, vocation, level, password);

  return product;
}