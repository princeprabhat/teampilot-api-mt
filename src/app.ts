
import express from 'express';
import errorHandler from './middlewares/errorHandler.js';
import cors from 'cors';
import helmet from 'helmet';



const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(errorHandler);

export default app;