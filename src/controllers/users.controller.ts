import { Request, Response } from 'express';
import * as usersService from '../services/users.service';

export default async function create(req: Request, res: Response) {
  const token = await usersService.default(req.body);

  res.status(201).json({ token });
}