import { Router } from "express";
const router = Router()
import { register, login, logout } from "../controllers/authController.js";
import { validateLoginInput, validateRegisterInput } from "../middleware/validation.js";

router.post('/register', validateRegisterInput, register)
router.post('/login', validateLoginInput, login)
router.get('/logout', logout)

export default router

