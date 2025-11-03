
import express from 'express';
import errorHandler from './middlewares/errorHandler.js';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes/index.js';
import ApiError from './utils/ApiError.js';
import httpStatus  from 'http-status'


const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route every request starting with /api
app.use("/api",routes);

// Unknow routes
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// Global error handling middleware     
app.use(errorHandler);

export default app;