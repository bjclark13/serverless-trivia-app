import IQuestion from "./IQuestion";

import questions from "./data";

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Get a question for our trivia game.
 *
 * @param  questionNumber Optional. The number of the question, starting with 1.
 * @return {} triviaQuestion The trivia question with possible answers.
 */
const getTriviaQuestion = (questionNumber?: number) => {
  let index;
  if (questionNumber) {
    index = questionNumber - 1;
  } else {
    // if none provided, get one randomly
    index = getRandomInt(0, questions.length - 1);
  }

  const question = questions[index];

  return {
    question: question.question,
    questionNumber: index + 1,
    answers: getRandomAnswers(question),
  };
};

/**
 * Sort the array of answer randomly.
 * @param IQuestion
 * @return {array} Array of answers, without showing the correct one.
 */
const getRandomAnswers = (question: IQuestion) => {
  // Note: this isn't a great sort funciton, but it's just for testing.
  return question.answers
    .sort(() => Math.random() - 0.5)
    .map((answer) => answer.answer); // .map removes whether it is correct
};

/**
 *
 * @param   questionNumber
 * @param   answerText
 * @returns {bool} Whether the answer is correct
 */
const checkAnswer = (questionNumber: number, answerText: string): boolean => {
  const { answers } = questions[questionNumber - 1];

  if (answers.length) {
    const givenAnswer = answers.find((possibleAnswer) => {
      return possibleAnswer.answer === answerText;
    });

    return givenAnswer?.isCorrect || false;
  } else {
    return false;
  }
};

/**
 * Used to add data to DynamoDB
 */
const seedData = () => {};

export { checkAnswer, getTriviaQuestion };
