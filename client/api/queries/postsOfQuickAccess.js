/* eslint-disable linebreak-style */

import gql from "graphql-tag"
export default function getPostOfQuickAccess(slug, itensPerPage, pageIndex){
	let query
	if (pageIndex == 1) {
		query = gql`
            {
            publicacoes(where: { acessos_rapido: { slug: "${slug}" } }, start:0 ,limit:${itensPerPage}, sort: "id:desc") {
                id
                titulo
                resumo
                slug
                capa {
                url
                }
            }
            publicacoesConnection(where: { acessos_rapido: { slug: "${slug}" } }){
                aggregate{
                count
                }
            }
            }
        `
	}
	else{
		let start = (itensPerPage * pageIndex) - itensPerPage
		query = gql`
            {
            publicacoes(where: { acessos_rapido: { slug: "${slug}" } }, start:${Number(start)} ,limit:${itensPerPage}, sort: "id:desc") {
                id
                titulo
                resumo
                slug
                capa {
                url
                }
            }
            publicacoesConnection(where: { acessos_rapido: { slug: "${slug}" } }){
                aggregate{
                count
                }
            }
            }
        `
	}
	return query
}