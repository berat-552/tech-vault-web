import { QuestionAnswerPair } from "../types/interfaces/QuestionAnswerPair";

const getRandomQuestion = async (): Promise<QuestionAnswerPair> => {
  const url = "https://raw.githubusercontent.com/moabukar/tech-vault/main/README.md";

  const response = await fetch(url);

  const content = await response.text();
  const detailRegex =
    /<details>\s*<summary>(.*?)<\/summary>\s*([\s\S]*?)<\/details>/g;

  const matches = [...content.matchAll(detailRegex)];

  const questionsWithAnswers = matches.map((match) => {
    const question = match[1].trim();
    const answer = match[2].trim().replace(/\n/g, " ");

    return { question, answer } || {};
  });

  const randomIndex = Math.floor(Math.random() * questionsWithAnswers.length);

  return questionsWithAnswers[randomIndex];
};

export default getRandomQuestion;
