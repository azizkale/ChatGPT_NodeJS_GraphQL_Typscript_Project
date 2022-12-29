import { ask_aQuestion } from "./query/ask_aQuestion";
import { correctGrammer } from "./query/grammer";

export const resolvers = {
  Query: {
    ask_aQuestion: ask_aQuestion,
    correctGrammer: correctGrammer,
  },
  // Mutation: {},
};
