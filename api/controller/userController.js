import UserModel from "../model/userModel.js";
import CustomError from "../utils/CustomError.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/tokenUtils.js";

export const registerUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, mobile, branch } = req.body;

    // Validate input
    if (!firstName || !lastName || !email || !password || !mobile || !branch) {
      return next(new CustomError(400, "All fields are required"));
    }

    // Check if the user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return next(new CustomError(400, "User already exists with this email"));
    }

    const existingMobileUser = await UserModel.findOne({ mobile });
    if (existingMobileUser) {
      return next(
        new CustomError(400, "User already exists with this mobile number")
      );
    }

    // Create new user
    const user = await UserModel.create({
      ...req.body,
      isActive: false, // Set user as inactive by default
    });

    // Respond with a registration success message
    res.status(201).json({
      message:
        "Registration successful! You will be validated by an admin. Please check your email or SMS for notification.",
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobile: user.mobile,
        branch: user.branch,
        isActive: user.isActive,
      },
    });
  } catch (error) {
    // Pass specific errors to the error handler
    if (error.code === 11000) {
      return next(
        new CustomError(
          400,
          "User already exists with this email or mobile number"
        )
      );
    }
    next(new CustomError(500, error.message || "Internal Server Error"));
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return next(new CustomError(400, "All fields are required"));
    }

    // Check if the user exists
    const existingUser = await UserModel.findOne({ email });
    if (!existingUser) {
      return next(new CustomError(404, "User does not exist with this email"));
    }

    // Validate if the user is active
    if (!existingUser.isActive) {
      return next(new CustomError(403, "User account is not active"));
    }

    // Verify the password
    const isPasswordValid = await existingUser.comparePassword(password);
    if (!isPasswordValid) {
      return next(new CustomError(401, "Invalid password"));
    }

    // Remove the password from the user object
    const { password: _, ...filteredUser } = existingUser._doc;

    // Generate tokens
    const accessToken = generateAccessToken({
      id: existingUser._id,
      role: existingUser.role,
    });
    const refreshToken = generateRefreshToken({
      id: existingUser._id,
      role: existingUser.role,
    });

    // Respond with tokens and user data
    res.status(200).json({ accessToken, refreshToken, user: filteredUser });
  } catch (error) {
    // Pass specific errors to the error handler
    if (error.code === 11000) {
      return next(new CustomError(400, "User already exists with this email"));
    }
    next(new CustomError(500, error.message || "Internal Server Error"));
  }
};
