import { ask_aQuestion } from "./query/ask_aQuestion";

export const resolvers = {
  Query: {
    ask_aQuestion: ask_aQuestion,
  },
  // Mutation: {},
};
