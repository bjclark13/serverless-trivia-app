"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const app = __importStar(require("./app"));
module.exports.checkAnswer = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const { questionNumber, answer } = JSON.parse(event.body);
    if (questionNumber && answer) {
        const isCorrect = app.checkAnswer(questionNumber, answer);
        return {
            statusCode: 200,
            body: JSON.stringify(isCorrect),
        };
    }
    else {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: "Baaad",
                input: event,
            }, null, 2),
        };
    }
});
module.exports.getTriviaQuestion = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const { questionNumber } = event.queryStringParameters || false;
    const question = app.getTriviaQuestion(questionNumber);
    return {
        statusCode: 200,
        body: JSON.stringify(question, null, 2),
    };
});
