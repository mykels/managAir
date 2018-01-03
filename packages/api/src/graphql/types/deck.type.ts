import gql from 'graphql-tag';

export const schema = gql`
  type Deck {
    id: String!,
    name: String!,
    cards: [Card!]
  }
`;
