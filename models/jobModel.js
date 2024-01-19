import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  company: String,
  position: String,
  status: {
    type: String,
    enum: ['interview', 'declined', 'pending'],
    default: 'pending'
  },
  type: {
    type: String,
    enum: ['full-time', 'part-time', 'remote', 'internship'],
    default: 'full-time'
  },
  location: {
    type: String,
    default: 'my city',
  },
},
  { timestamps: true }
)

export default mongoose.model('Job', JobSchema)