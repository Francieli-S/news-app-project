import { Router } from "express";
import userRoutes from './modules/User/routes.js'

const router = Router()

router.use('/user', userRoutes)

export default router