/* eslint-disable react/prop-types */
import React from "react"
import Head from "next/head"
import ContentBox from "../components/ContentBox"
import MenuBar from "../components/Menu"
import SliderImg from "../components/Slider"
import Publications from "../components/Publications"
import Search from "../components/Search"
import QuickAccess from "../components/QuickAccess"
import Highlights from "../components/Highlighs"
import Footer from "../components/Footer"
import { initializeApollo } from "../../api/Apollo"
import { MainBox, RightBox } from "../components/ContentBox/styles"
import { QUERY_INDEX } from "../../api/queries/staticIndex"

export default function Home(props) {
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
				<link rel="stylesheet" href="/ckeditor.css"/>
				<link rel="shortcut icon" href="/images/favicon.png" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        
			</Head>
			<MenuBar menuData={props.index.data.categorias}></MenuBar>
			<ContentBox>
				<SliderImg sliderData={props.index.data.headers}></SliderImg>
				<MainBox>
					<Publications publicationsData={props.index.data.publicacoes}></Publications>
					<RightBox>
						<Search></Search>
						<QuickAccess quickAccessData={props.index.data.acessosRapidos}>
							Acesso Rapido
						</QuickAccess>
					</RightBox>
				</MainBox>
				<Highlights highlightsData={props.index.data.destaques}></Highlights>
				<Footer footerData={props.index.data.footer}></Footer>
			</ContentBox>
		</>
	)
}
export async function getServerSideProps() {
	const apolloClient = initializeApollo()
	const index = await apolloClient.query({ query: QUERY_INDEX })
	return {
		props: {
			index: index,
			initialApoloState: apolloClient.cache.extract(),
		},
	}
}
