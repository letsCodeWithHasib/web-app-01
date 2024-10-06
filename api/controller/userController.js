import UserModel from "../model/userModel.js";
import CustomError from "../utils/CustomError.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/tokenUtils.js";

export const registerUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, branch } = req.body;

    // Validate input
    if (!firstName || !lastName || !email || !password || !branch) {
      return next(new CustomError(400, "All fields are required"));
    }

    // Check if the user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return next(new CustomError(400, "User already exists with this email"));
    }

    // Create new user
    const user = await UserModel.create(req.body);

    // Generate tokens
    const accessToken = generateAccessToken({ id: user._id, role: user.role });
    const refreshToken = generateRefreshToken({
      id: user._id,
      role: user.role,
    });

    // Filter out the password from the user object
    const { password: userPassword, ...filteredUser } = user._doc;

    // Respond with tokens and user data
    res.status(201).json({ accessToken, refreshToken, user: filteredUser });
  } catch (error) {
    // Pass specific errors to the error handler
    if (error.code === 11000) {
      return next(new CustomError(400, "User already exists with this email"));
    }
    next(new CustomError(500, error.message || "Internal Server Error"));
  }
};
