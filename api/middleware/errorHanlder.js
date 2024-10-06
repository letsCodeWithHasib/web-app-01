const errorHandler = (err, req, res, next) => {
  // Set default status code and message
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  // Log the error for debugging (consider using a logging library)
  console.error(`[Error] ${statusCode} - ${message}`, {
    stack: err.stack, // Only log stack trace in development
    path: req.originalUrl,
    method: req.method,
  });

  // Send error response
  res.status(statusCode).json({
    success: false,
    message:
      process.env.NODE_ENV === "development"
        ? message
        : "Internal Server Error",
  });
};

export default errorHandler;
