import gql from "graphql-tag";
export const QUERY_MENU = gql`
  {
    categorias {
      id
      nome
      subcategorias {
        id
        nome
        slug
      }
    }
  }
`;
