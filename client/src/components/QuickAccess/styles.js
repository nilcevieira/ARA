import styled from "styled-components"
import { COLORS } from "../../theme/colors"

export const Container = styled.div`
  width: 100%;
  margin-bottom: 2vw;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0px 0px 6px ${COLORS.orange};
  border-radius: 5px;
  box-sizing: border-box;

`
export const SectionTitle = styled.div`
  background-color: ${COLORS.orange};
  width: 100%;
  height: 4.2rem;
  font-size: 1.6rem;
  border-bottom: .3rem solid ${COLORS.orange};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.black};
  padding-left: 10px;
  @media (max-width: 1100px){
    border-bottom: .2rem solid ${COLORS.black};
    font-size: 1.4rem;
  }
  @media (max-width: 800px){
    justify-content: left;
    border: 0;
    border-bottom: .3rem solid ${COLORS.black};
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
  width: 40%;
  @media (max-width: 800px){
    width: 100%;
  }
`

export const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  :visited {
    color: ${COLORS.black};
  }
  :link {
    color: ${COLORS.black};
  }
`
