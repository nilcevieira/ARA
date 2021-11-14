/* eslint-disable linebreak-style */

import gql from "graphql-tag"
export default function getPostsSearch(searchTerm, indexPage, itemsPerPage){
	let query
	if (indexPage == 1) {
		query = gql`
            {
            publicacoes(where:{_or:[{titulo_contains:"${searchTerm}"}, {resumo_contains:"${searchTerm}"}, {tags_contains: "${searchTerm}"}]}, 
            start:0 ,limit:${itemsPerPage}, sort: "id:desc") {
                id
                titulo
                resumo
                slug
                capa{
                url
                }
            }
            publicacoesConnection(where:{_or:[{titulo_contains:"${searchTerm}"}, {resumo_contains:"${searchTerm}"}, {tags_contains: "${searchTerm}"}]}){
                aggregate{
                count
                }
            }
            }
        `
	}else {
		let start = itemsPerPage * indexPage - itemsPerPage
		query = gql`
            {
            publicacoes(where:{_or:[{titulo_contains:"${searchTerm}"}, {resumo_contains:"${searchTerm}"}, {tags_contains: "${searchTerm}"}]}, 
            start:${Number(start)} ,limit:${itemsPerPage}, sort: "id:desc") {
                id
                titulo
                resumo
                slug
                capa{
                url
                }
            }
            publicacoesConnection(where:{_or:[{titulo_contains:"${searchTerm}"}, {resumo_contains:"${searchTerm}"}, {tags_contains: "${searchTerm}"}]}){
                aggregate{
                count
                }
            }
            }
        `
	}
	return query
}