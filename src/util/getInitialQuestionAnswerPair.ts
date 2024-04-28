import { QuestionAnswerPair } from "../types/interfaces/QuestionAnswerPair";

// get question from local storage if exists
const getInitialQuestionAnswerPair = (): QuestionAnswerPair => {
  const savedPair = localStorage.getItem("questionAnswerPair");

  return savedPair ? JSON.parse(savedPair) : { question: "", answer: "" };
};

export default getInitialQuestionAnswerPair;
