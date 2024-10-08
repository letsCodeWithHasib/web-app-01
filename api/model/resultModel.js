import mongoose from "mongoose";

const resultSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the Student taking the test
    },
    testId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Test", // Reference to the Test taken
    },
    score: {
      type: Number,
      required: true, // Score achieved in the test
    },
    answers: [
      {
        questionId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Question", // Reference to the answered Question
        },
        selectedOption: {
          type: String, // The option selected by the student
        },
        isCorrect: {
          type: Boolean, // Whether the selected option is correct
        },
      },
    ],
  },
  { timestamps: true }
);

const Result = mongoose.model("Result", resultSchema);
