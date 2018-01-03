import gql from 'graphql-tag';

export const schema = gql`
  type User {
    id: String!,
    name: String
    nick: String
    boards: [Board!]
  }
`;
