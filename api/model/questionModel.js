import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
      minlength: 5, // Minimum length for question text
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
      enum: ["multipleChoice", "trueFalse", "coding"],
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true, // Ensure every question has a creator
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "medium",
    },
    category: {
      type: String,
      trim: true,
    },
    tests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Test",
      },
    ],
  },
  { timestamps: true }
);

// Optional: Add a method to validate at least one correct option
questionSchema.methods.validateOptions = function () {
  return this.options.some((option) => option.isCorrect);
};

// Unique index to prevent duplicate questions by text and creator
questionSchema.index({ text: 1, createdBy: 1 }, { unique: true });

const Question = mongoose.model("Question", questionSchema);
export default Question;
