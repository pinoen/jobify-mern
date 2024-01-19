import { Router } from "express";
const router = Router();
import { createJob, getAllJobs, getJob, updateJob, deleteJob } from "../controllers/jobControllers.js";

router.route("/").post(createJob).get(getAllJobs);
router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);

export default router