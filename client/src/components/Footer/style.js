import styled from "styled-components"
import { COLORS } from "../../theme/colors"
export const Container = styled.div`
  background: ${COLORS.green};
  min-height: 20rem;
  width: 100%;
  color: ${COLORS.white};
  font-size: 1.6rem;
`
export const FooterContent = styled.div`
  > figure img {
    max-width: 100%;
  }
  padding: 2rem;
`
