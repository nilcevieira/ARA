/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { URL_BASE_CLIENT } from "../../Url/urls"
import {
	Container,
	SectionTitle,
	Publication,
	PublicationTitle,
	PublicationCover,
	ShortDescription,
	DescriptionContainer,
	Error,
	CoverImage,
} from "./styles"
import { URL_UPLOADS } from "../../Url/urls"
import React from "react"
/**
 * 
 * @param {*} publicationsData receive publications according to request
 * @returns Publication list
 */
export default function Publications({publicationsData}) {
	if (Object.values(publicationsData).length > 0) {
		return (
			<Container>
				<SectionTitle>Publicações</SectionTitle>
				{publicationsData.map((item) => (
					<Publication href={`${URL_BASE_CLIENT}/post/${item.slug}`}>
						<PublicationCover><CoverImage src={item.capa.url.replace(/\/uploads\//g, URL_UPLOADS)}></CoverImage></PublicationCover>
						<DescriptionContainer>
							<PublicationTitle>{item.titulo}</PublicationTitle>
							<ShortDescription>{item.resumo}</ShortDescription>
						</DescriptionContainer>
					</Publication>
				))}
			</Container>
		)
	} else {
		return (
			<Container>
				<SectionTitle>Publicações</SectionTitle>
				<Error>Nenhuma publicação foi encontrada</Error>
			</Container>
		)
	}
}
