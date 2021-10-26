export abstract class CustomError extends Error {
    abstract statusCode: number;
  
    //We are passing in the message because of our default error
    //To have default message to pass to both errors
    constructor(message: string) {
      super(message);
  
      Object.setPrototypeOf(this, CustomError.prototype);
    }
  
    abstract serializeErrors(): { message: string; field?: string }[];
  }
  