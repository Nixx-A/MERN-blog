import { Router } from 'express'
import { AuthController } from "../controllers/auth.controller.js";
import { loginSchema, registerSchema } from "../schemas/authSchema.js";
import { validateSchema } from "../middlewares/validator.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router()

router.post('/login', validateSchema(loginSchema), AuthController.login)

router.post('/register', validateSchema(registerSchema), AuthController.register)

router.post('/logout', AuthController.logout)

router.get('/profile', authRequired, AuthController.profile)

router.get('/verify', AuthController.verifyToken)

export default router