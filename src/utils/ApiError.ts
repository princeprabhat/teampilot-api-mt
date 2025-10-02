// interface IApiError {       
//     statusCode: number;
//     message: string;
//     isOperational: boolean;
//     stack?: string;
// }


export class ApiError extends Error{

  constructor
    (
    public statusCode:number, 
    message:string, 
    public isOperational = true,
    stack:any = ""
) {
    super(message);
   
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}


