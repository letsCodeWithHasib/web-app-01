import mongoose from "mongoose";

const testSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true, // Ensure unique titles
    },
    description: {
      type: String,
      trim: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
      },
    ],
    duration: {
      type: Number,
      required: true, // Ensure duration is required
      min: 1,
    },
    status: {
      type: String,
      enum: ["active", "archived"],
      default: "active",
    },
    attempts: {
      type: Number,
      default: 0,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    passingScore: {
      type: Number,
      min: 0,
    },
    isDeleted: {
      type: Boolean,
      default: false, // Soft delete field
    },
  },
  {
    timestamps: true,
  }
);

const Test = mongoose.model("Test", testSchema);
export default Test;
