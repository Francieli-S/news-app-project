import { Router } from 'express';
import userController from './controller.js';
import { validateRequest } from './../../middleware/validateRequest.js';
import userValidationSchema from './validation.js';

const router = Router();

router.post('/register', validateRequest(userValidationSchema.registerSchema), userController.resgister);
router.post('/login', validateRequest(userValidationSchema.loginSchema), userController.login);
router.get('/profile', userController.profile);

export default router;
