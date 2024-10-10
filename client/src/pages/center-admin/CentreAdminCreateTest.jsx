import React, { useState, useEffect } from "react";
import api from "../../api/api";

const TestCreation = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [fullMarks, setFullMarks] = useState(""); // New state for full marks
  const [passingMarks, setPassingMarks] = useState(""); // New state for passing marks
  const [questions, setQuestions] = useState([
    { text: "", options: [{ text: "", isCorrect: false }] },
  ]);

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    if (field === "text") {
      updatedQuestions[index].text = value;
    }
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex].text = value;
    setQuestions(updatedQuestions);
  };

  const handleIsCorrectChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.forEach((option, idx) => {
      option.isCorrect = idx === optionIndex && value === "true"; // Set isCorrect based on selection
    });
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { text: "", options: [{ text: "", isCorrect: false }] },
    ]);
  };

  const addOption = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options.push({
      text: "",
      isCorrect: false,
    });
    setQuestions(updatedQuestions);
  };

  const handleCreateTest = async (e) => {
    e.preventDefault();
    const testData = {
      title,
      description,
      duration,
      fullMarks,
      passingMarks,
      questionsData: questions,
    };

    console.log("Test Data:", testData);
    // Here you would typically make an API call to save the test
    try {
      const response = await api.post("/test", testData);
      console.log("reseponse from api -> ", response);
    } catch (error) {
      console.log("error from api -> ", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-br via-purple-500 from-indigo-400 to-pink-500 py-5 px-10 rounded-lg">
      <h2 className="text-5xl mb-4 font-bold font-grotesk">
        Create a New Test
      </h2>
      <form onSubmit={handleCreateTest} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Test Title"
          className="border rounded p-2 w-full"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Test Description"
          className="border rounded p-2 w-full"
          required
        />
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Duration (in minutes)"
          className="border rounded p-2 w-full"
          required
        />
        <input
          type="number"
          value={fullMarks}
          onChange={(e) => setFullMarks(e.target.value)}
          placeholder="Full Marks"
          className="border rounded p-2 w-full"
          required
        />
        <input
          type="number"
          value={passingMarks}
          onChange={(e) => setPassingMarks(e.target.value)}
          placeholder="Passing Marks"
          className="border rounded p-2 w-full"
          required
        />

        <h3 className="text-3xl mt-4 text-[Poppins] font-bold">Questions</h3>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="border rounded p-4 mb-4">
            <input
              type="text"
              value={question.text}
              onChange={(e) =>
                handleQuestionChange(questionIndex, "text", e.target.value)
              }
              placeholder="Question Text"
              className="border rounded p-2 w-full mb-2 font-bold"
              required
            />
            {question.options.map((option, optionIndex) => (
              <div
                key={optionIndex}
                className="flex gap-5 items-center mb-2 border bg-white rounded p-2"
              >
                <input
                  type="text"
                  value={option.text}
                  onChange={(e) =>
                    handleOptionChange(
                      questionIndex,
                      optionIndex,
                      e.target.value
                    )
                  }
                  placeholder={`Option ${optionIndex + 1}`}
                  className="w-full"
                  required
                />
                <select
                  onChange={(e) =>
                    handleIsCorrectChange(
                      questionIndex,
                      optionIndex,
                      e.target.value
                    )
                  }
                  name="isCorrect"
                  value={option.isCorrect ? "true" : "false"}
                  className="border rounded p-1"
                >
                  <option value="false">False</option>
                  <option value="true">True</option>
                </select>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addOption(questionIndex)}
              className="bg-blue-600 text-white p-2 rounded mt-2"
            >
              Add Option
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addQuestion}
          className="bg-blue-600 text-white p-2 rounded mt-2"
        >
          Add Question
        </button>

        <button
          type="submit"
          className="bg-green-600 text-white p-2 rounded mt-4"
        >
          Create Test
        </button>
      </form>
    </div>
  );
};

export default TestCreation;
