import { Router } from "express";
const router = Router();
import { createJob, getAllJobs, getJob, updateJob, deleteJob } from "../controllers/jobControllers.js";
import { validateJobInput } from "../middleware/validation.js";

router.route("/").post(validateJobInput, createJob).get(getAllJobs);
router.route("/:id").get(getJob).patch(validateJobInput, updateJob).delete(deleteJob);

export default router