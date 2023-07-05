import { Router } from 'express';
import * as ordersControllers from '../controllers/orders.controller';

const router = Router();

router.get('/', ordersControllers.default);

export default router;