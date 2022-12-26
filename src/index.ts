const { ApolloServer } = require("apollo-server");
import { typeDefs } from "./schema/typeDefs/index";
import { resolvers } from "./schema/resolvers/index";

const PORT = process.env.PORT || 5000;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  context: ({ req }: { req: any }) => {
    const token = req.headers.authorization || "";
    //console.log("authorization: " + token)
    return { token };
  },
});

server.listen({ port: PORT }).then(() => {
  console.log(`🚀  Server ready at http://localhost:${PORT}`);
});
