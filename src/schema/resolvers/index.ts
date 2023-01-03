import { chat } from "./query/chat";
import { correctGrammer } from "./query/grammer";

export const resolvers = {
  Query: {
    chat: chat,
    correctGrammer: correctGrammer,
  },
  // Mutation: {},
};
