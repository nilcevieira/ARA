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
import Pagination from "../../components/Pagination"
import { initializeApollo } from "../../../api/Apollo"
import { MainBox, RightBox } from "../../components/ContentBox/styles"
import { QUERY_NAVEGATION } from "../../../api/queries/staticNavigation"

import getPostsCategories from "../../../api/queries/postsOfCategories"


export default function Categoria(props) {
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
              Acesso Rapido
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
	let itemsPerPage = 20
	if (!page) page = 1
	let queryCategories = getPostsCategories(slug, itemsPerPage, page)
	
	const postsCategorie = await apolloClient.query({
		query: queryCategories,
	})
	let total = postsCategorie.data.publicacoesConnection.aggregate.count
	let maximumPagination = Math.ceil(total/itemsPerPage)
	if (Object.values(postsCategorie.data.publicacoes).length == 1 && page == 1) {
		context.res.writeHead(302, {Location: `/post/${postsCategorie.data.publicacoes[0].slug}`})
		context.res.end()

	}
	return {
		props: {
			index: index,
			post: postsCategorie,
			page: page,
			maximumPagination: maximumPagination,
			initialApoloState: apolloClient.cache.extract(),
		},
	}
}
