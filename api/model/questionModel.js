import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    options: [
      {
        optionText: {
          type: String,
          required: true,
        },
        isCorrect: {
          type: Boolean,
          default: false,
        },
      },
    ],
    questionType: {
      type: String,
      enum: ["multipleChoice", "trueFalse", "coding"], // Types of questions
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User who created the question
    },
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", questionSchema);
