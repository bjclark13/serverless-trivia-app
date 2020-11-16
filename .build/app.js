"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTriviaQuestion = exports.checkAnswer = void 0;
const data_1 = __importDefault(require("./data"));
const getRandomInt = (min, max) => {
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
const getTriviaQuestion = (questionNumber) => {
    let index;
    if (questionNumber) {
        index = questionNumber - 1;
    }
    else {
        // if none provided, get one randomly
        index = getRandomInt(0, data_1.default.length - 1);
    }
    const question = data_1.default[index];
    return {
        question: question.question,
        questionNumber: index + 1,
        answers: getRandomAnswers(question),
    };
};
exports.getTriviaQuestion = getTriviaQuestion;
/**
 * Sort the array of answer randomly.
 * @param IQuestion
 * @return {array} Array of answers, without showing the correct one.
 */
const getRandomAnswers = (question) => {
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
const checkAnswer = (questionNumber, answerText) => {
    const { answers } = data_1.default[questionNumber - 1];
    if (answers.length) {
        const givenAnswer = answers.find((possibleAnswer) => {
            return possibleAnswer.answer === answerText;
        });
        return (givenAnswer === null || givenAnswer === void 0 ? void 0 : givenAnswer.isCorrect) || false;
    }
    else {
        return false;
    }
};
exports.checkAnswer = checkAnswer;
/**
 * Used to add data to DynamoDB
 */
const seedData = () => { };
