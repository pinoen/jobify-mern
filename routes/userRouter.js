import { Router } from "express";
import { getAppStats, getCurrentUser, updateUser } from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validation.js";
const router = Router()

router.get('/current-user', getCurrentUser)
router.get('/admin/app-stats', getAppStats)
router.patch('/update-user', validateUpdateUserInput, updateUser)

export default router