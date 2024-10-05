const errorHandler = (err, req, res, next) => {
  // Set default status code and message
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  // Send error response
  res.status(statusCode).json({
    success: false,
    message,
  });
};

export default errorHandler;
