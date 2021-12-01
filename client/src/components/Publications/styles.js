import styled from "styled-components"
import { COLORS } from "../../theme/colors"
export const Container = styled.div`
  margin-top: 1vw;
  width: 74%;
  min-height: 100rem;
  display: flex;
  border-radius: 5px;
  flex-wrap: wrap;
  align-content: flex-start;
  @media (max-width: 800px){
    width: 100%;
  }
`

export const SectionTitle = styled.div`
  background-color: ${COLORS.orange};
  width: 100%;
  height: 4.2rem;
  border-left: 0.6rem solid ${COLORS.orange};
  font-size: 1.6rem;
  font-weight: bold;
  box-shadow: 0px 0px 6px ${COLORS.orange};
  display: flex;
  align-items: center;
  color: ${COLORS.black};
  border-radius: 3px;
  padding-left: 10px;
  @media(max-width:1100px){
    font-size: 1.4rem;
  }
`

export const Publication = styled.a`
  width: 100%;
  height: 20rem;
  border-radius: 5px;
  box-shadow: 0px 0px 6px ${COLORS.orange};
  display: flex;
  margin-bottom: 1vw;
  margin-top: 1vw;
  box-sizing: border-box;
  :visited {
    color: ${COLORS.black};
  }
  :link {
    color: ${COLORS.black};
  }
  @media (max-width: 1100px){
    height: 15rem;
  }
`

export const PublicationCover = styled.div`
  overflow: hidden;
  height: 100%;
  width: 20rem;
  border-radius: 5px 0px 0px 5px;
  box-shadow: 0px 0px 6px ${COLORS.orange};
  box-sizing: border-box;
  flex-shrink: 0;
  @media (max-width: 1100px){width: 15rem}
`

export const CoverImage = styled.img`
  height:100%;
  width: 100%;
`

export const PublicationTitle = styled.h3`
  margin-bottom: max(0.1vw, 0.1vh);
  font-size: 1.6rem;
  color: ${COLORS.black};
  @media(max-width:1100px){
    font-size: 1.4rem;
  }
`

export const ShortDescription = styled.p`
  width: 100%;
  font-size: 1.4rem;
  color: ${COLORS.black};
  text-align: justify;
  @media(max-width:1100px){
    font-size: 1.3rem;
  }
  @media(max-width:500px){
    display: none;
  }

  
`

export const DescriptionContainer = styled.div`
  width: 70%;
  float: left;
  justify-content: center center;
  justify-items: center;
  justify-content: center;
  padding-left: 3%;
  padding-right: 3%;
  overflow: hidden;
`

export const Error = styled.h3`
  font-size: 1.4rem;
  margin-left: 1vw;
`
