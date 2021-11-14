/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Image, Slider } from "./styles"
import { URL_BASE_API } from "../../Url/urls"
import React from "react"

export default function SliderImg({ sliderData }) {
	if (Object.values(sliderData).length > 0) {
		return (
			<Slider onLoad={carousel()}>
				{sliderData.map((item) => (
					<Image name='slider-img' src={URL_BASE_API + item.Imagem.url}></Image>
				))}
			</Slider>
		)
	}
	else {
		return (
			<Slider>

			</Slider>
		)
	}
}


let slideIndex = 0
function carousel() {
	let counter
	if (typeof window !== "undefined") {
		let Image = document.getElementsByName("slider-img")
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
