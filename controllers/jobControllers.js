import Job from '../models/jobModel.js';
import { StatusCodes } from 'http-status-codes';

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({})
  res.status(StatusCodes.OK).json({
    status: 'success',
    results: jobs.length,
    data: {
      jobs
    }
  })
}

export const createJob = async (req, res) => {
  const newJob = await Job.create(req.body);

  res.status(StatusCodes.CREATED).json({
    status: 'success',
    data: {
      job: newJob
    }
  })
}

export const getJob = async (req, res) => {
  const id = req.params.id;
  const foundJob = await Job.findById(id)

  res.status(StatusCodes.OK).json({
    status: 'success',
    data: {
      job: foundJob
    }
  })
}

export const updateJob = async (req, res) => {
  const { id } = req.params;

  const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.status(StatusCodes.OK).json({ job: updatedJob });
}

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removedJob = await Job.findByIdAndDelete(id);

  res.status(StatusCodes.OK).json({ job: removedJob });
}