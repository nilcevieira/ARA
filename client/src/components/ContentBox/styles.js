import styled from "styled-components"
import { COLORS } from "../../theme/colors"

export const Container = styled.div`
  background-color: ${COLORS.blueLight};
`

export const CentralBox = styled.div`
  margin: 0 auto;
  width: 85%;
  max-width: 1360px;
`

/**
 * The MainBox will receive: publications, search and quick access.
 */
export const MainBox = styled.div`

  box-sizing: border-box;
  width: 100%; 
  display: flex;
  background-color: ${COLORS.blueLight};
  /**
  At 800px, the contents of the MainBox are shown in reverse order, putting search
  and quick access at the top of the page.
  */
  @media (max-width: 800px){
    flex-direction: column-reverse;
  }

`
export const RightBox = styled.div`
  width: 25%;
  margin-left: 0.9vw;
  margin-top: 1vw;
  padding-left: 2vw;

  @media (max-width:800px){
    margin-left:0;
    width: 100%;
  }

  @media (max-width:900px){
    padding: 0;
  }
`
