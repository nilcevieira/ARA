import styled from "styled-components"
import {COLORS}  from "../../theme/colors"

export const ContainerPagination = styled.div`
  width: 74%;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 4.2rem;
`

export const NumberList = styled.tr`
  border-radius: 3px;
  box-sizing: border-box;
  overflow: hidden;
`

export const PageNumber = styled.td`
  background: ${COLORS.green};
`
export const PagingLink = styled.a`
  margin: 0 0.2rem 0 0.2rem;
  padding: 0 1rem 0 1rem;
  text-decoration: none;
  :visited {
    color: ${COLORS.white};
  }
  :link {
    color: ${COLORS.white};
  }

`
