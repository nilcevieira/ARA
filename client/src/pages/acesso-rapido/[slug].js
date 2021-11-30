/* eslint-disable react/prop-types */
import Head from "next/head"
import React from "react"
import ContentBox from "../../components/ContentBox"
import MenuBar from "../../components/Menu"
import SliderImg from "../../components/Slider"
import Publications from "../../components/Publications"
import Search from "../../components/Search"
import QuickAccess from "../../components/QuickAccess"
import Highlights from "../../components/Highlighs"
import Footer from "../../components/Footer"
import { initializeApollo } from "../../../api/Apollo"
import { MainBox, RightBox } from "../../components/ContentBox/styles"
import { QUERY_NAVEGATION } from "../../../api/queries/staticNavigation"

import getPostOfQuickAccess from "../../../api/queries/postsOfQuickAccess"
import Pagination from "../../components/Pagination"

export default function AcessoRapido(props) {
	return (
		<>
			<Head>
				<title>ARA</title>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
					rel="stylesheet"
				/>
				<link rel="stylesheet" href="/ckeditor.css" />
				<link rel="shortcut icon" href="/images/favicon.png" />
			</Head>
			<MenuBar menuData={props.index.data.categorias}></MenuBar>
			<ContentBox>
				<SliderImg sliderData={props.index.data.headers}></SliderImg>
				<MainBox>
					<Publications publicationsData={props.post.data.publicacoes}></Publications>
					<RightBox>
						<Search></Search>
						<QuickAccess quickAccessData={props.index.data.acessosRapidos}>
              Acesso Rápido
						</QuickAccess>
					</RightBox>
				</MainBox>
				<Pagination page={props.page} maximumPagination={props.maximumPagination}>{props.maximumPagination}</Pagination>
				<Highlights highlightsData={props.index.data.destaques}></Highlights>
				<Footer footerData={props.index.data.footer}></Footer>
        
			</ContentBox>
		</>
	)
}

export async function getServerSideProps(context) {
	const apolloClient = initializeApollo()
	const index = await apolloClient.query({ query: QUERY_NAVEGATION })
	const { slug } = context.query
	let { page } = context.query
	if (!page) page = 1 
	let itensPerPage = 20
	let queryQuickAccess = getPostOfQuickAccess(slug, itensPerPage, page)

	const quickAccessPublications = await apolloClient.query({
		query: queryQuickAccess,
	})
	let total = quickAccessPublications.data.publicacoesConnection.aggregate.count
	let maximumPagination = Math.ceil(total/itensPerPage)
	if (Object.values(quickAccessPublications.data.publicacoes).length == 1 && page == 1) {
		context.res.writeHead(302, {Location: `/post/${quickAccessPublications.data.publicacoes[0].slug}`})
		context.res.end()

	}
	return {
		props: {
			index: index,
			post: quickAccessPublications,
			page: page,
			maximumPagination: maximumPagination,
			initialApoloState: apolloClient.cache.extract(),
		},
	}
}
