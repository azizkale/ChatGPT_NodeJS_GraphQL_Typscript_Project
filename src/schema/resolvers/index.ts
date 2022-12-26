import { hello } from "./query/hello";

export const resolvers = {
  Query: {
    hello: hello,
  },
  // Mutation: {},
};
