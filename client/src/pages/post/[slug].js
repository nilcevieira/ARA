/* eslint-disable react/prop-types */
import Head from "next/head"
import React from "react"
import ContentBox from "../../components/ContentBox"
import MenuBar from "../../components/Menu"
import Footer from "../../components/Footer"
import Publication from "../../components/Publication"
import Search from "../../components/Search"
import QuickAccess from "../../components/QuickAccess"
import Highlights from "../../components/Highlighs"
import { initializeApollo } from "../../../api/Apollo"

import { QUERY_POST_COMPLEMENT } from "../../../api/queries/staticPost"
import { MainBox, RightBox } from "../../components/ContentBox/styles"
import getPublication from "../../../api/queries/publication"

export default function Post(props) {
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
				<script async charset="utf-8" src="//cdn.embedly.com/widgets/platform.js"></script>
				<link rel="stylesheet" href="/ckeditor.css"/>
				<link rel="shortcut icon" href="/images/favicon.png" />
				<script src='/embedly.js'></script>
			</Head>
			<MenuBar menuData={props.index.data.categorias}></MenuBar>
			<ContentBox>
				<Highlights highlightsData={props.index.data.destaques}></Highlights>
				<MainBox>
					<Publication publicationData={props.post.data.publicacoes}></Publication>
					<RightBox>
						<Search></Search>
						<QuickAccess quickAccessData={props.index.data.acessosRapidos}>
              Acesso Rápido
						</QuickAccess>
					</RightBox>
				</MainBox>
				<Footer footerData={props.index.data.footer}></Footer>
			</ContentBox>
		</>
    
	)
}

export async function getServerSideProps(context) {
	const apolloClient = initializeApollo()
	const index = await apolloClient.query({ query: QUERY_POST_COMPLEMENT })
	const { slug } = context.query
	let queryPost = getPublication(slug)
	const post = await apolloClient.query({ query: queryPost })

	return {
		props: {
			index: index,
			post: post,
			initialApoloState: apolloClient.cache.extract(),
		},
	}
}
