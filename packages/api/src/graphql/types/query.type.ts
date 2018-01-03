import gql from 'graphql-tag';

export const schema = gql`
  type Query {
    me: User,
    user(id:String!): User,
    board(id:String!): Board,
    card(id:String!): Card,
  }
`;
