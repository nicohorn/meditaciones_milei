import { gql } from "@apollo/client";

export const GET_QUOTES = gql`
  query quotes {
    quotes {
      id
      content
      description
      date_published
      type
      link
      tags
      userId
      created_by {
        id
        name
        email
      }
      interactions {
        id
        type
        userId
      }
    }
  }
`;
