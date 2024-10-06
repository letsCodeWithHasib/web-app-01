import mongoose from "mongoose";
const { Schema } = mongoose;
import bcrypt from "bcryptjs";
import CustomError from "../utils/CustomError.js";

// User Schema
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      minlength: [3, "First name must be at least 3 characters long"],
      maxlength: [20, "First name must not exceed 20 characters"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      minlength: [3, "Last name must be at least 3 characters long"],
      maxlength: [20, "Last name must not exceed 20 characters"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Basic email regex
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long."],
    },
    role: {
      type: String,
      required: [true, "Role is required"],
      enum: ["student", "admin", "company"],
      default: "student",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    branch: {
      type: String,
      required: [true, "Branch is required"],
      enum: [
        "noida sec-16",
        "noida sec-63",
        "faridabad",
        "south ex",
        "pitampura",
        "janakpuri",
        "gurugram",
      ],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Password hashing middleware
userSchema.pre("save", async function (next) {
  // Only hash if the password is new or modified
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10); // Generate a salt
    this.password = await bcrypt.hash(this.password, salt); // Hash the password
    next();
  } catch (error) {
    next(error); // Pass any hashing errors to the next middleware
  }
});

// Method to compare hashed password
userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw new CustomError(500, "Error comparing passwords");
  }
};

// Export the model
export default mongoose.model("User", userSchema);
