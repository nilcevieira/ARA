/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import {
	NavigationArea,
	CategoryName,
	SubcategoryName,
	SubcategoryList,
	Menu,
	Subcategory,
	Category,
	ImageLogo,
	LogoLink,
	MenuHamburger,
	ContentHamburger,
	ContainerLogo,
	LineHamburger,
} from "./styles.js"
import { URL_BASE_CLIENT } from "../../Url/urls.js"
import React from "react"

/**
 * 
 * @param {*} menuData It's the menu data, made up by categories and subcategories 
 * @returns Component 'MenuBar', this components is off the 'ContentBox'
 */
export default function MenuBar({ menuData }) {
	return (
		<>
			<NavigationArea>
				<Menu>
					<MenuHamburger>
						<ContentHamburger onClick={showMenu}>
							<LineHamburger></LineHamburger>
							<LineHamburger></LineHamburger>
							<LineHamburger></LineHamburger>
						</ContentHamburger>
					</MenuHamburger>
					<ContainerLogo className="item-resp">
						<LogoLink href={URL_BASE_CLIENT}><ImageLogo src="/images/logo_ara_branca.png"></ImageLogo></LogoLink>
					</ContainerLogo>
					{menuData.map((item) => (
						<Category className="item-resp">
							<CategoryName>{item.nome}</CategoryName>
							<SubcategoryList>
								{item.subcategorias.map((sub) => (
									<Subcategory>
										<SubcategoryName
											href={`${URL_BASE_CLIENT}/categoria/${sub.slug}`}
										>
											{sub.nome}
										</SubcategoryName>
									</Subcategory>
								))}
							</SubcategoryList>
						</Category>
					))}
				</Menu>
			</NavigationArea>
		</>
	)
}

/**
 * This function is responsible for controlling the display of the menu.
 */
function showMenu(){
	if (typeof window !== "undefined") {
		let elements = document.getElementsByClassName("item-resp")
		Array.prototype.filter.call(elements, (element) => {
			if (element.style.display == "none" || element.style.display == "") {
				element.style.display = "grid"
			} else {
				element.style.display = ""
			}
		})
	}
}