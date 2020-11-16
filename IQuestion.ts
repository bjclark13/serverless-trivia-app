interface IAnswer {
  answer: string;
  isCorrect: boolean;
}

export default interface IQuestion {
  question: string;
  answers: IAnswer[];
}
