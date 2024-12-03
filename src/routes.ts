import { Router } from 'express';

import usersRoutes from './modules/User/routes.js';
import newsRoutes from './modules/News/routes.js';

const router = Router();

router.use('/users', usersRoutes);
router.use('/news', newsRoutes);

export default router;
