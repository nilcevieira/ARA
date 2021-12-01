/* eslint-disable react/prop-types */
import React from "react"
import { Container, FooterContent } from "./style"
import { URL_UPLOADS } from "../../Url/urls"

/**
 * 
 * @param {*} footerData It's a html text created by CKEditor 5.
 * @returns Component 'Footer', witch contains all information regarding the page footer.
 */
export default function Footer({ footerData }) {
// Check whether content was created  
	if (footerData == null) {
		return (
			<Container>
				<FooterContent />
			</Container>
		)
	}

	else {
		return (
			<Container>
				<FooterContent dangerouslySetInnerHTML={{ __html: footerData.rodape.replace(/\/uploads\//g, URL_UPLOADS) }} />
			</Container>
		)

	}
}
