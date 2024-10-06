import jwt from "jsonwebtoken";
import CustomError from "../error/CustomError";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return next(new CustomError(401, "Access token is missing"));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(new CustomError(403, "Invalid access token"));
    }

    req.user = user; // Save user info for future use
    next();
  });
};

export default verifyToken;
