/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react"
import { Container, HighlightLink, Image } from "./style"
import { URL_BASE_API } from "../../Url/urls"

/**
 * 
 * @param {*} highlightsData These are highlighs data, it contains: external/internal links and image url
 * @returns  Component 'Highlights', contains a slide that changes every 5 seconds and is wrapped in a link.
 */
export default function Highlights({ highlightsData }) {
// check if at last one highlight has been created.
	if (Object.values(highlightsData).length > 0) {
		return (
			<Container onLoad={carousel()}>
				{highlightsData.map((item) => (
					<HighlightLink href={item.link} target="_blank">
						<Image name="highlight-slide" src={URL_BASE_API + item.capa.url}></Image>
					</HighlightLink>
				))}
			</Container>
		)
	} else {
		return (
			<Container>
			</Container>
		)
	}

}

let slideIndex = 0
/**
 * This function change image every 5 seconds
 */
function carousel() {
	let counter
	// check if the page was loaded
	if (typeof window !== "undefined") {
		let Image = document.getElementsByName("highlight-slide")
		for (counter = 0; counter < Image.length; counter++) {
			Image[counter].style.display = "none"
		}
		slideIndex++
		if (slideIndex > Image.length) {
			slideIndex = 1
		}
		Image[slideIndex - 1].style.display = "block"
		setTimeout(carousel, 5000) // Change image every 5 seconds
	}
}