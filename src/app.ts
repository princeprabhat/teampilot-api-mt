
import express from 'express';
import errorHandler from './middlewares/errorHandler.js';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes/index.js';



const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api",routes);

// Global error handling middleware     

app.use(errorHandler);

export default app;