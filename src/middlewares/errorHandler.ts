import type { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import ApiError  from '../utils/ApiError.js';

// Custom error interface (optional)
interface CustomError extends Error {
    status?: number;
    code?: string;
}

const errorHandler = (
    err: CustomError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';

    // Optionally log the error here
    // console.error(err);

    res.status(status).json({
        success: false,
        error: {
            message,
            code: err.code || undefined,
        },
    });
};

export default errorHandler;




// const errorHandler = (err, req, res, next) => {
//     let { statusCode, message } = err;

//     res.locals.errorMessage = err.message;

//     const response = {
//         code: statusCode,
//         message,
//         ...(config.env === "development" && { stack: err.stack }),
//     };

//     if (config.env === "development") {
//         console.error(err);
//     }

//     res.status(statusCode).send(response);
// };

