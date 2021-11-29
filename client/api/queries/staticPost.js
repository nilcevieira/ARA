import gql from "graphql-tag"
export const QUERY_POST_COMPLEMENT = gql`
query Index{
    categorias{
      id
      nome
      subcategorias(sort:"nome:asc"){
        id
        nome
        slug
      }
    }
    footer{
      rodape
    }
    acessosRapidos{
      id
      nome
      slug
      icone{
        url
      }
    }
    destaques{
      id
      nome,
      link,
      capa{
        url
      }
    }
  }
`