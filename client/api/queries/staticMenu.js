import gql from "graphql-tag"
export const QUERY_MENU = gql`
  {
    categorias {
      id
      nome
      subcategorias(sort:"nome:asc") {
        id
        nome
        slug
      }
    }
  }
`