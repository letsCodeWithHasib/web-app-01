import React, { useState } from "react";

const TestCreation = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [questions, setQuestions] = useState([
    { text: "", options: [{ text: "", isCorrect: false }] },
  ]);

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    if (field === "text") {
      updatedQuestions[index].text = value;
    } else {
      updatedQuestions[index].options[field] = {
        ...updatedQuestions[index].options[field],
        text: value,
      };
    }
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex].text = value;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the test data to the backend
    const testData = {
      title,
      description,
      duration,
      questions,
    };

    console.log("Test Data:", testData);
    // Here you would typically make an API call to save the test
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl mb-4">Create a New Test</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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

        <h3 className="text-xl mt-4">Questions</h3>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="border rounded p-4 mb-4">
            <input
              type="text"
              value={question.text}
              onChange={(e) =>
                handleQuestionChange(questionIndex, "text", e.target.value)
              }
              placeholder="Question Text"
              className="border rounded p-2 w-full mb-2"
              required
            />
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="flex items-center mb-2">
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
                  className="border rounded p-2 w-full"
                  required
                />
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
