import gql from 'graphql-tag';

export const schema = gql`
  type Mutation {
    addBoard(name:String!):Board
  }
`;
