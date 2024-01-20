import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';

// routes
import jobRouter from './routes/jobRouter.js';

// middlewares
import errorHandler from './middleware/errorHandler.js';

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

app.use('/api/v1/jobs', jobRouter);

app.use("*", (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`
  })
})

app.use(errorHandler)

const port = process.env.PORT || 3000;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
} catch (error) {
  console.log(error)
  process.exit(1)
}

