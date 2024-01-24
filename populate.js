import { readFile } from 'fs/promises';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import jobModel from './models/jobModel.js';
import userModel from './models/userModel.js';

try {
  await mongoose.connect(process.env.MONGO_URL)
  // const user = await userModel.findOne({ email: 'test@test.com' })
  const user = await userModel.findOne({ email: 'emiliopino@me.com' })
  const jsonJobs = JSON.parse(await readFile(new URL('./utils/MOCK_DATA.json', import.meta.url)))

  const jobs = jsonJobs.map((job) => {
    return { ...job, createdBy: user._id }
  })

  await jobModel.deleteMany({ createdBy: user._id })
  await jobModel.create(jobs)
  console.log('success!')
  process.exit(0)
} catch (error) {
  console.log(error)
  process.exit(1)
}
