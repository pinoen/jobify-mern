import Job from '../models/jobModel.js';
import { nanoid } from 'nanoid';

let jobs = [
  {
    id: nanoid(),
    company: 'Job 1',
    position: 'Description 1'
  },
  {
    id: nanoid(),
    company: 'Job 2',
    position: 'Description 2'
  },
  {
    id: nanoid(),
    company: 'Job 3',
    position: 'Description 3'
  }
]

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({})
  res.status(200).json({
    status: 'success',
    results: jobs.length,
    data: {
      jobs
    }
  })
}

export const createJob = async (req, res) => {
  const newJob = await Job.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      job: newJob
    }
  })
}

export const getJob = async (req, res) => {
  const id = req.params.id;
  const foundJob = await Job.findById(id)

  if (!foundJob) {
    return res.status(404).json({
      status: 'fail',
      message: `no job with id: ${id}`
    })
  }

  res.status(200).json({
    status: 'success',
    data: {
      job: foundJob
    }
  })
}

export const updateJob = async (req, res) => {
  const id = req.params.id;
  const { company, position } = req.body;
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({
      status: 'fail',
      message: `no job with id: ${id}`
    })
  }

  if (!company || !position) {
    return res.status(400).json({ message: 'Please provide company and position' })
  }

  job.company = company;
  job.position = position;
  res.status(200).json({
    status: 'success',
    data: {
      job
    }
  })
}

export const deleteJob = async (req, res) => {
  const id = req.params.id;
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return res.status(404).json({
      status: 'fail',
      message: `no job with id: ${id}`
    })
  }

  const index = jobs.indexOf(job);
  jobs.splice(index, 1);
  res.status(200).json({
    status: 'success',
    data: null
  })
}