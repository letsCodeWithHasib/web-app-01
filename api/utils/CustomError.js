class CustomError extends Error {
  constructor(statusCode, message) {
    super(message || "An error occurred");
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }

  logError() {
    console.error(`Error ${this.statusCode}: ${this.message}`);
  }
}

export default CustomError;
