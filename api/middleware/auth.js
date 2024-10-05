import jwt from "jsonwebtoken";
import CustomError from "../error/CustomError";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return next(new CustomError("Access token is missing", 401));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(new CustomError("Invalid access token", 403));
    }
    req.user = user; // Save user info for future use
    next();
  });
};

export default verifyToken;
