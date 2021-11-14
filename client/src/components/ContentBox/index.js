/* eslint-disable react/prop-types */
import { CentralBox, Container} from "./styles.js"
import React from "react"

/**
 * 
 * @param {*} children Is the content that will be aligned to the center of the page. The navigation menu is not included in this component.
 * @returns A components made up of center-aligned "div" tags.
 */

export default function ContentBox({ children }) {
	return (
		<>
			<Container>
				<CentralBox>{children}</CentralBox>
			</Container>
		</>
	)
}
