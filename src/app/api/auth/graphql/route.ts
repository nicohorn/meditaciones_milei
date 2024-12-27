import { createYoga, createSchema } from "graphql-yoga";
import { typeDefs } from "../../../../../graphql/typeDefs";
import { resolvers } from "../../../../../graphql/resolvers";

const schema = createSchema({ typeDefs, resolvers });

const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: "/api/graphql",
  batching: false,
  fetchAPI: { Response },
});

// Export both GET and POST handlers
export { handleRequest as GET, handleRequest as POST };
