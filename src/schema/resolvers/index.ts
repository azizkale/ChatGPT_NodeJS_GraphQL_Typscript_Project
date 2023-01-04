import { chat } from "./query/chat";
import { correctGrammer } from "./query/grammer";
import { translate } from "./query/translate";
import { context } from "./query/context";

export const resolvers = {
  Query: {
    chat: chat,
    correctGrammer: correctGrammer,
    translate: translate,
    context: context,
  },
  // Mutation: {},
};
