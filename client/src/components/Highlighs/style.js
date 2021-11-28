import styled from "styled-components"
import { COLORS } from "../../theme/colors"

export const Container = styled.div`
  width: 100%;
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
