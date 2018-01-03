import gql from "graphql-tag";

export const cardQuery = gql`
    query card($id: String!) {
      card(id: $id) {
        id
        title
        members {
          id
          name
          nick
        }
      }
    }
`;
