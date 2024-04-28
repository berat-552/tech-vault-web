import { RandomQuestionButtonProps } from "../types/interfaces/RandomQuestionButtonProps";

function RandomQuestionButton({ fetchRandomQuestion }: RandomQuestionButtonProps) {
  return (
    <button onClick={fetchRandomQuestion} className="btn btn-primary mx-auto my-8">
      Get Random Question
    </button>
  );
}

export default RandomQuestionButton;
