import { Router } from 'express';

import newsController from './controller.js';
import { validateRequest } from './../../middleware/validateRequest.js';
import newsValidationSchema from './validation.js';
// import { authMiddleware } from '../../middleware/auth.js';

const router = Router();

router.get(
  '/latest',
  validateRequest(newsValidationSchema.latestNewsSchema),
  newsController.getLatestNews,
);


export default router;