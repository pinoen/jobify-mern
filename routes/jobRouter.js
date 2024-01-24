import { Router } from "express";
const router = Router();
import { createJob, getAllJobs, getJob, updateJob, deleteJob } from "../controllers/jobControllers.js";
import { validateJobInput, validateIdParam } from "../middleware/validation.js";
import { checkForTestUser } from "../middleware/auth.js";

router.route("/").post(checkForTestUser, validateJobInput, createJob).get(getAllJobs);
router.route("/:id").get(validateIdParam, getJob).patch(checkForTestUser, validateIdParam, validateJobInput, updateJob).delete(checkForTestUser, validateIdParam, deleteJob);

export default router