import { useEffect, useState } from "react";
import RandomQuestionButton from "./RandomQuestionButton";
import fetchRandomQuestion from "../util/fetchRandomQuestion";
import getInitialQuestionAnswerPair from "../util/getInitialQuestionAnswerPair";
function Accordion() {
  const [isOpen, setIsOpen] = useState(false);
  const [questionAnswerPair, setQuestionAnswerPair] = useState(
    getInitialQuestionAnswerPair()
  );

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleFetchRandomQuestion = async () => {
    const fetchedQuestionAnswer = await fetchRandomQuestion();
    setQuestionAnswerPair(fetchedQuestionAnswer);
    setIsOpen(false); // close to hide answer
  };

  //  save the question to localStorage
  useEffect(() => {
    localStorage.setItem("questionAnswerPair", JSON.stringify(questionAnswerPair));
  }, [questionAnswerPair]);

  const answerDoesNotExist: boolean =
    questionAnswerPair.answer === "Answer goes here";

  return (
    <>
      <div className="flex flex-col items-start mt-8 mx-8 min-h-screen sm:mx-20">
        <div
          className={`collapse collapse-arrow bg-base-200 max-w-4xl mx-auto ${
            isOpen && "collapse-open"
          }`}
        >
          <div
            className="collapse-title text-xl font-medium"
            onClick={toggleAccordion}
          >
            {questionAnswerPair.question || "Click the button for a random question"}
          </div>
          <input
            type="checkbox"
            checked={isOpen}
            onChange={toggleAccordion}
            className="peer cursor-pointer"
          />
          <div className="collapse-content peer-checked:block text-md sm:text-lg">
            {answerDoesNotExist ? (
              <>
                <p>
                  Answer doesn't exist, raise a PR
                  <a href="https://github.com/moabukar/tech-vault">
                    {" "}
                    <span className="text-primary font-bold hover:border-b-2 hover:border-b-primary">
                      here
                    </span>{" "}
                  </a>
                  to add it in.
                </p>
              </>
            ) : (
              questionAnswerPair.answer
            )}
          </div>
        </div>
        <RandomQuestionButton fetchRandomQuestion={handleFetchRandomQuestion} />
      </div>
    </>
  );
}

export default Accordion;
