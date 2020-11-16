import { getTriviaQuestion, checkAnswer } from "./app";

console.log(getTriviaQuestion(1)); // Who invented TypeScript?
console.log(checkAnswer(1, 'Your mother')); // false
console.log(checkAnswer(1, 'Microsoft')); // true

console.log(getTriviaQuestion());
