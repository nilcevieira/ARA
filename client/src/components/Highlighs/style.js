import styled from "styled-components"
import { COLORS } from "../../theme/colors"

export const Container = styled.div`
  background-color: ${COLORS.white};
  width: 100%;
  min-height: 100px;
`
export const HighlightLink = styled.a`
  text-decoration: none;
  :visited {
    color: ${COLORS.white};
  }
  :link {
    color: ${COLORS.white};
  }
`
export const Image = styled.img`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`
