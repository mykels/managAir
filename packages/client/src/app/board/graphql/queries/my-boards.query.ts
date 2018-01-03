import gql from "graphql-tag";

export const myBoardsQuery = gql`
    query myBoards {
      me {
        boards {
          id
          name
        }
      }
    }
`;
