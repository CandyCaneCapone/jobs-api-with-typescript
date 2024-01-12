import { Request, Response, NextFunction } from "express";
import Job from "../models/job";
import NotFoundError from "../errors/not-found";

const getAllJobs = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const jobs = await Job.find({});
    res.json({ jobs });
  } catch (error) {
    next(error);
  }
};
const getSingleJob = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const jobId: string = req.params.id;
    const job = await Job.findById(jobId);

    if (!job) {
      throw new NotFoundError(`no job found with id ${jobId}`);
    }

    res.json({ job });
  } catch (error) {
    next(error);
  }
};
const createJob = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
    const job = await Job.create(req.body)
    res.status(201).json({job})
  } catch (error) {
    next(error);
  }
};
const editJob = (req: Request, res: Response, next: NextFunction): void => {};
const deleteJob = (req: Request, res: Response, next: NextFunction): void => {};

export { getAllJobs, getSingleJob, createJob, editJob, deleteJob };
