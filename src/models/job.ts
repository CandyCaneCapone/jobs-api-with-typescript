import mongoose, { Schema, model } from "mongoose";

interface IJob {
  title: string;
  description: string;
  salary: number;
  location: string;
  company: string;
}

const jobSchema = new Schema<IJob>({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 500,
    trim: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
    maxlength: 300,
    trim: true,
  },
});

const Job = mongoose.model<IJob>("Job", jobSchema);
export default Job;
