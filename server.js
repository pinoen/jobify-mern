import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';
import { body, validationResult } from 'express-validator';

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

app.post('/api/v1/test', [body('name').notEmpty().withMessage('name is required').isLength({ min: 3 }).withMessage('name must be at least 3 characters')], (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg)
    return res.status(400).json({ errors: errorMessages })
  }
  next()
}, (req, res) => {
  const { name } = req.body
  res.json({ message: `hello ${name}` });
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

