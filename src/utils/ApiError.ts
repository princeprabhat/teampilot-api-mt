// interface IApiError {       
//     statusCode: number;
//     message: string;
//     isOperational: boolean;
//     stack?: string;
// }


export class ApiError extends Error{
//   statusCode: number;
//   isOperational: boolean;

  constructor
    (
    public statusCode:number, 
    message:string, 
    public isOperational = true,
    stack:any = ""
) {

    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}