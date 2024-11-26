import { Router } from 'express';

import usersRoutes from './modules/User/routes.js';

const router = Router();

router.use('/users', usersRoutes);

export default router;
