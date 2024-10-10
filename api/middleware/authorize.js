import CustomError from "../utils/CustomError.js";

const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    const user = req.user; // Assume user info is set in req.user by verifyToken middleware

    if (!user || !allowedRoles.includes(user.role)) {
      return next(
        new CustomError(
          `Forbidden: User role '${
            user ? user.role : "unknown"
          }' is not allowed. Allowed roles: ${allowedRoles.join(", ")}`,
          403
        )
      );
    }

    next(); // User is authorized
  };
};

export default authorize;
