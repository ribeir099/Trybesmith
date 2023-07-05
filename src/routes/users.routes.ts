import { Router } from 'express';
import * as usersControllers from '../controllers/users.controller';

const router = Router();

router.post('/', usersControllers.default);

export default router;