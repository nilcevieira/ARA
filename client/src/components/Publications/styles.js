import styled from "styled-components"

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
  width: 100%;
  height: 4.2rem;
  border-left: 0.6rem solid #000011;
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #0d0d0d;
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
  border: 0.2rem solid #0d0d0d;
  display: flex;
  margin-bottom: 1vw;
  margin-top: 1vw;
  box-sizing: border-box;
  :visited {
    color: black;
  }
  :link {
    color: black;
  }
  @media (max-width: 1100px){
    height: 15rem;
    border: 0.15rem solid #0d0d0d;
  }
`

export const PublicationCover = styled.div`
  overflow: hidden;
  height: 100%;
  width: 20rem;
  border-radius: 5px 0px 0px 5px;
  border-right: max(0.1vw, 0.1vh) solid #0d0d0d;
  box-sizing: border-box;
  @media (max-width: 1100px){width: 15rem}
`

export const CoverImage = styled.img`
  height:100%;
  width: 100%;
`

export const PublicationTitle = styled.h3`
  margin-bottom: max(0.1vw, 0.1vh);
  font-size: 1.6rem;
  color: #0d0d0d;
  @media(max-width:1100px){
    font-size: 1.4rem;
  }
`

export const ShortDescription = styled.p`
  width: 100%;
  font-size: 1.4rem;
  color: #0d0d0d;
  text-align: justify;
  @media(max-width:1100px){
    font-size: 1.3rem;
  }

  
`

export const DescriptionContainer = styled.div`
  width: 72%;
  float: left;
  justify-content: center center;
  justify-items: center;
  justify-content: center;
  padding-left: 3%;
  padding-right: 3%;
`

export const Error = styled.h3`
  font-size: 1.4rem;
  margin-left: 1vw;
`
