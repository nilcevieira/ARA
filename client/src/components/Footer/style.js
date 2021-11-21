import styled from "styled-components"
import { COLORS } from "../../theme/colors"
export const Container = styled.div`
  background: linear-gradient(180deg, ${COLORS.green.darkGreen} 0%, ${COLORS.green.lightGreen} 100%);
  min-height: 20rem;
  width: 100%;
  color: ${COLORS.gray.lightGray};
  font-size: 1.6rem;
`
export const FooterContent = styled.div`
  > figure img {
    max-width: 100%;
  }
  padding: 2rem;
`
