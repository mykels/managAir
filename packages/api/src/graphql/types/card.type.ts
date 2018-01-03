import gql from 'graphql-tag';

export const schema = gql`
  type Card {
    id: String!,
    title: String!,
    members: [User!]
  }
`;
