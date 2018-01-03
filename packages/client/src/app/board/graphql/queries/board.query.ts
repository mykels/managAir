import gql from "graphql-tag";

export const boardQuery = gql`
    query board($id: String!) {
      board(id: $id) {
        id
        name
        decks {
          id
          name
          cards {
            id
            title
          }
        }
        owner {
          id
          name
          nick
        }
      }
    }
`;
