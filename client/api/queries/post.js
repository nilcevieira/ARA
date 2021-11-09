import gql from "graphql-tag";
export const QUERY_POST_MENU = gql`
query Index{
    categorias{
      id
      nome
      subcategorias{
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