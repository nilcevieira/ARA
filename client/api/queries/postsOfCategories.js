/* eslint-disable linebreak-style */
import gql from "graphql-tag"

export default function getPostsCategories(slug, itemsPerPage, pageIndex){
	let query
	if (pageIndex == 1){
		query = gql`
            {
            publicacoes(where: { subcategoria: { slug: "${slug}" } }, start:0 ,limit:${itemsPerPage}, sort: "id:desc") {
                id
                titulo
                resumo
                slug
                capa {
                url
                }
            }
            publicacoesConnection(where: { subcategoria: { slug: "${slug}" } }){
                aggregate{
                count
                }
            }
            }
        `
	}else{
		let start = (itemsPerPage * pageIndex) - itemsPerPage
		query = gql`
            {
            publicacoes(where: { subcategoria: { slug: "${slug}" } }, start:${Number(start)} ,limit:${itemsPerPage}, sort: "id:desc") {
                id
                titulo
                resumo
                slug
                capa {
                url
                }
            }
            publicacoesConnection(where: { subcategoria: { slug: "${slug}" } }){
                aggregate{
                count
                }
            }
            }
        `
	}
	return query
}