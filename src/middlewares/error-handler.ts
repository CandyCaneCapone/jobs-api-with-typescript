import { Request, Response, NextFunction } from "express";
import NotFoundError from "../errors/not-found";
import mongoose from "mongoose";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
):void => {
    let message : string = "Something went wrong"
    let statusCode : number = 500

    if (err instanceof NotFoundError) {
        message = err.message 
        statusCode = err.statusCode
    }

    if (err instanceof mongoose.Error.CastError) {
        message = `no task found with id ${err.value}`
        statusCode = 404 
    }
    
    res.status(statusCode).json({
        error : {
            message
        }
    })
};


export default errorHandler ; 