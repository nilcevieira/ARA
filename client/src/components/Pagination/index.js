/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { ContainerPagination, PagingLink, PageNumber, NumberList } from "./styles"
import React from "react"
/**
 * 
 * @param {*} maximumPagination Maximum pagination of the content 
 * @returns Component formed by decimal numbers for paging
 */
export default function Pagination({maximumPagination}) {
	let itens = []
	for (let counter = 1; counter <= maximumPagination; counter++) {
		itens.push(counter)
	}
	return (
		<>
			<ContainerPagination>
				<NumberList>
					{itens.map((item) => (
						<PageNumber>
							<PagingLink href={`?page=${item}`}>{item}</PagingLink>
						</PageNumber>
					))}
				</NumberList>
			</ContainerPagination>
		</>
	)
}
