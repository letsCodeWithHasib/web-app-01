import CustomError from "../error/CustomError";

const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    const user = req.user; // Assume user info is set in req.user by verifyToken middleware

    if (!user || !allowedRoles.includes(user.role)) {
      return next(new CustomError("Forbidden", 403)); // User is not allowed
    }

    next(); // User is authorized
  };
};

module.exports = authorize;
