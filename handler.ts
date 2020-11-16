"use strict";

import * as app from "./app";

module.exports.checkAnswer = async (event: any) => {
  const { questionNumber, answer } = JSON.parse(event.body);

  if (questionNumber && answer) {
    const isCorrect = app.checkAnswer(questionNumber, answer);

    return {
      statusCode: 200,
      body: JSON.stringify(isCorrect),
    };
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify(
        {
          message: "Baaad",
          input: event,
        },
        null,
        2
      ),
    };
  }
};

module.exports.getTriviaQuestion = async (event: any) => {
  const { questionNumber } = event.queryStringParameters || false;
  const question = app.getTriviaQuestion(questionNumber);

  return {
    statusCode: 200,
    body: JSON.stringify(question, null, 2),
  };
};
