import gql from "graphql-tag"
export const QUERY_INDEX = gql`
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
    headers{
      id
      Imagem{
        url
      }
    }
    acessosRapidos{
      id
      nome
      slug
      icone{
        url
      }
    }
    publicacoes(limit:5, sort: "id:desc"){
      id
      titulo
      resumo
      slug
      capa{
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
    footer{
      rodape
    }
  }
`