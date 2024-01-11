import { Router } from "express";
const jobRouter: Router = Router();

import * as jobController from "../controller/jobs";

jobRouter.get("/", jobController.getAllJobs);
jobRouter.get("/:id", jobController.getSingleJob);
jobRouter.post("/", jobController.createJob);
jobRouter.patch("/:id" , jobController.editJob)
jobRouter.delete("/:id" , jobController.deleteJob)

export default jobRouter;
