export const typeDefs = `#graphql

 scalar DateTime

type User {
  id: ID!
  name: String
  email: String
  emailVerified: DateTime
  image: String
  role: String
  interactions: [Interaction!]
  quotes: [Quote!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type Query {
  quotes: [Quote!]!
  quote(id: ID!): Quote
}

type Mutation {
  createQuote(input: QuoteInput!): Quote!
  updateQuote(id: ID!, input: QuoteInput!): Quote!
  deleteQuote(id: ID!): Quote!
}

type Quote {
  id: ID!
  content: String!
  description: String!
  date_published: String!
  type: String!
  link: String!
  tags: [String!]!
  created_by: User
  interactions: [Interaction!]
  userId: ID
}

input QuoteInput {
  content: String!
  description: String!
  date_published: String!
  type: String!
  link: String!
  tags: [String!]!
}

type User {
  id: ID!
  name: String!
  email: String!
  quotes: [Quote!]!
  interactions: [Interaction!]!
}

type Interaction {
  id: ID!
  type: String!
  user: User!
  quote: Quote!
  userId: ID!
  quoteId: ID!
}
`;
