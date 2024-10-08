import mongoose from "mongoose";

const testSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User who created the test
    },
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question", // Reference to the Question collection
      },
    ],
    duration: {
      type: Number, // Duration in minutes
    },
  },
  {
    timestamps: true,
  }
);

const Test = mongoose.model("Test", testSchema);
