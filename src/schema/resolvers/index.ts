import { chat } from "./query/chat";
import { correctGrammer } from "./query/grammer";
import { translate } from "./query/translate";

export const resolvers = {
  Query: {
    chat: chat,
    correctGrammer: correctGrammer,
    translate: translate,
  },
  // Mutation: {},
};
