import { Router } from 'express';
import * as productsControllers from '../controllers/products.controller';

const router = Router();

router.get('/', productsControllers.getAll);
router.post('/', productsControllers.create);

export default router;