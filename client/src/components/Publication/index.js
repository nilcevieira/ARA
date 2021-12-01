/* eslint-disable react/jsx-key */
import { Text, Title, Container, Tags, AttachmentList, Attachment } from "./styles"
import { URL_UPLOADS } from "../../Url/urls"
import React from "react"

/**
 * 
 * @param {*} publicationData Gets the publication data for build its recpectives page
 * @returns Component with the publication
 */
export default function Publication({ publicationData }) {
	return publicationData.map((item) => (
		<Container>
			<Title>{item.titulo}</Title>
			<Text dangerouslySetInnerHTML={{ __html: item.texto.replace(/\/uploads\//g, URL_UPLOADS) }} />
			<Tags><b>Tags:</b> {item.tags}</Tags>
			<AttachmentList><b>Anexos:</b>{item.anexos.map((anexo) => (
				<Attachment target="_blank" href={anexo.url.replace(/\/uploads\//g, URL_UPLOADS)}> {anexo.name}</Attachment>
			))}</AttachmentList>
		</Container>
	))
}
