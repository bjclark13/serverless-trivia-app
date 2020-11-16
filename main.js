"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
console.log(app_1.getTriviaQuestion(1)); // Who invented TypeScript?
console.log(app_1.checkAnswer(1, 'Your mother')); // false
console.log(app_1.checkAnswer(1, 'Microsoft')); // true
console.log(app_1.getTriviaQuestion());
