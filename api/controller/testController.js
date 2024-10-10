import Test from "../model/testModel.js";
import Question from "../model/questionModel.js";

// Create a new test with questions
export const createTest = async (req, res) => {
  try {
    const {
      title,
      description,
      questionsData,
      duration,
      fullMarks,
      status,
      startDate,
      endDate,
      passingMarks,
    } = req.body;

    const { id } = req.body;

    // Check for empty fields
    if (!title || !questionsData || !duration || !passingScore) {
      return res
        .status(400)
        .json({ message: "Please fill in all required fields." });
    }

    // Create questions first
    const questions = await Question.insertMany(questionsData);

    // Extract the question IDs
    const questionIds = questions.map((question) => question._id);

    // Create the test with the created question IDs
    const newTest = await Test.create({
      title,
      description,
      createdBy: id,
      questions: questionIds, // Associate the created questions
      duration,
      status,
      startDate,
      endDate,
      passingScore,
    });

    res.status(201).json(newTest);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
