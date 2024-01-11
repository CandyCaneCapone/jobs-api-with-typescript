import {Request , Response , NextFunction} from "express"

const getAllJobs = (req:Request , res:Response , next:NextFunction):void => {}
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