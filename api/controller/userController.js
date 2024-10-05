import UserModel from "../model/userModel.js";
import CustomError from "../utils/CustomError.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/tokenUtils.js";

export const registerUser = async (req, res, next) => {
  try {
    const user = await UserModel.create(req.body);

    // Generate tokens
    const accessToken = generateAccessToken({ id: user._id, role: "user" });
    const refreshToken = generateRefreshToken({ id: user._id, role: "user" });

    // Respond with tokens
    res.status(201).json({ accessToken, refreshToken });
  } catch (error) {
    // Pass any other errors to the error handler
    next(new CustomError(500, error.message));
  }
};
