import { Router } from "express";
import { getAppStats, getCurrentUser, updateUser } from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validation.js";
import { authorizePermissions } from "../middleware/auth.js";
import upload from "../middleware/multer.js";
const router = Router()

router.get('/current-user', getCurrentUser)
router.get('/admin/app-stats', authorizePermissions('admin'), getAppStats)
router.patch('/update-user', upload.single('avatar'), validateUpdateUserInput, updateUser)

export default router