/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { URL_BASE_API, URL_BASE_CLIENT } from "../../Url/urls"
import React from "react"
import {
	Container,
	QuickAccessIcon,
	QuickAccessItem,
	QuickAccessInfo,
	QuickAccessList,
	Name,
	Link,
	SectionTitle,
	Image,
} from "./styles"

/**
 * 
 * @param {*} quickAccessData: Receive a quick access list previously registered
 */
export default function QuickAccess({ quickAccessData }) {
	return (
		<Container>
			<SectionTitle>Acesso Rápido</SectionTitle>
			<QuickAccessList>
				{quickAccessData.map((item) => (
					<QuickAccessItem>
						<Link href={`${URL_BASE_CLIENT}/acesso-rapido/${item.slug}`}>
							<QuickAccessInfo>
								<QuickAccessIcon>
									<Image src={URL_BASE_API + item.icone.url}></Image>
								</QuickAccessIcon>
								<Name>{item.nome}</Name>
							</QuickAccessInfo>
						</Link>
					</QuickAccessItem>
				))}
			</QuickAccessList>
		</Container>
	)
}
