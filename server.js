import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
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

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  console.log(req)
  res.json({
    message: 'Data received!',
    data: req.body
  });
})

// Get all jobs
app.get('/api/v1/jobs', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: jobs.length,
    data: {
      jobs
    }
  })
})

// Create a new job
app.post('/api/v1/jobs', (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.status(400).json({ message: 'Please provide company and position' })
  }

  const id = nanoid();
  const newJob = { id, company, position };
  jobs.push(newJob);
  res.status(201).json({
    status: 'success',
    data: {
      job: newJob
    }
  })
})

// Get a single job
app.get('/api/v1/jobs/:id', (req, res) => {
  const id = req.params.id;
  const foundJob = jobs.find((job) => job.id === id);

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
})

// Update a job
app.patch('/api/v1/jobs/:id', (req, res) => {
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
})

// Delete a job
app.delete('/api/v1/jobs/:id', (req, res) => {
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
})

app.use("*", (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`
  })
})

app.use((error, req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: error.message
  })
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});