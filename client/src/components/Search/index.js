import { useState } from "react"
import { URL_BASE_CLIENT } from "../../Url/urls"
import { SubmitButton, Container, Form, InputText, TextButton } from "./styles"
import React from "react"

/**
 * 
 * @returns Component for search
 */
export default function Search() {
	const [searchText, setSearchText] = useState("")
	function checkEnter(e) {
		if (e.key == "Enter" && searchText.length >= 3) {
			window.location.href = `${URL_BASE_CLIENT}/busca/${searchText}`
		}
	}
	return (
		<Container>
			<Form>
				<InputText
					type="text"
					placeholder=""
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
					onKeyUp={(e) => checkEnter(e)}
				/>
				<SubmitButton href={`${URL_BASE_CLIENT}/busca/${searchText}`}>
					<TextButton>Buscar</TextButton>
				</SubmitButton>
			</Form>
		</Container>
	)
}
