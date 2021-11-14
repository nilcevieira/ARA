import styled from "styled-components"


export const Container = styled.div`
  width: 100%;
  margin-bottom: 2vw;
  display: flex;
  flex-wrap: wrap;
  border-left: 0.2rem solid #000011;
  border-right: 0.2rem solid #000011;
  box-sizing: border-box;
  
  @media (max-width: 1100px){
    border-left: 0.15rem solid #000011;
    border-right: 0.15rem solid #000011;
  }
  @media (max-width: 800px){
    border: 0px;
  }

`
export const SectionTitle = styled.div`
  width: 100%;
  height: 4.2rem;
  font-size: 1.6rem;
  border-bottom: .3rem solid #000011;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0D0D0D;
  padding-left: 10px;
  @media (max-width: 1100px){
    border-bottom: .2rem solid #000011;
    font-size: 1.4rem;
  }
  @media (max-width: 800px){
    justify-content: left;
    border: 0;
    border-left: .6rem solid #000011;
    border-radius: 3px;
  }
`

export const QuickAccessList = styled.ul`
  width: 100%;
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  @media (max-width: 800px){
    justify-content: space-around;
  }
`

export const QuickAccessItem = styled.li`
  margin-bottom: 1vw;
  margin-top: 1vw;
  @media (max-width: 800px){
    width: 70px;
  }
`

export const QuickAccessInfo = styled.ul`
  list-style-type: none;
  padding: 0px;

`

export const QuickAccessIcon = styled.li``


export const Name = styled.li`
  font-size: 1.6rem;
  @media (max-width:1100px){
    font-size: 1.4rem;
  }
`

export const Image = styled.img`
  width: 50%;
  @media (max-width: 800px){
    width: 100%;
  }
`

export const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  :visited {
    color: #0D0D0D;
  }
  :link {
    color: #0D0D0D;
  }
`
