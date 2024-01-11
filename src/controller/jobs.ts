import {Request , Response , NextFunction} from "express"
import Job from "../models/job"

const getAllJobs = async (req:Request , res:Response , next:NextFunction):Promise<any> => {
    try {
        const jobs = await Job.find({})
        res.json({jobs})
    }catch(error){
        next(error)
    }
}
const getSingleJob = (req:Request , res:Response , next:NextFunction):void => {}
const createJob = (req:Request , res:Response , next:NextFunction):void => {}
const editJob = (req:Request , res:Response , next:NextFunction):void => {}
const deleteJob = (req:Request , res:Response , next:NextFunction):void => {}

export {
    getAllJobs , 
    getSingleJob,
    createJob,
    editJob,
    deleteJob
}