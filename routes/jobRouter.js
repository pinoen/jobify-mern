import { Router } from "express";
const router = Router();
import { createJob, getAllJobs, getJob, updateJob, deleteJob } from "../controllers/jobControllers.js";
import { validateJobInput, validateIdParam } from "../middleware/validation.js";

router.route("/").post(validateJobInput, createJob).get(getAllJobs);
router.route("/:id").get(validateIdParam, getJob).patch(validateIdParam, validateJobInput, updateJob).delete(validateIdParam, deleteJob);

export default router