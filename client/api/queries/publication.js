/* eslint-disable linebreak-style */
import gql from "graphql-tag"
export default function getPublication(slug){
	const query = gql`
    {
      publicacoes(where: { slug: "${slug}" }) {
        titulo
        texto
        tags
        anexos{
          name
          url
        }
      }
    }
  `
	return query
}