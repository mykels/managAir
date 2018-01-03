import gql from 'graphql-tag';

export const schema = gql`
  type Board {
    id: String!,
    name: String!,
    owner: User!,
    members: [User!]!
    decks: [Deck!]
  }
`;
