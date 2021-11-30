import styled from "styled-components"
import { COLORS } from "../../theme/colors"

export const NavigationArea = styled.nav`
  font-size: 1.6rem;
  background: ${COLORS.green};
  width: 100%;
  height: 4.2rem;
  color: ${COLORS.white};
  display: flex;
  justify-content: center;
  @media (max-width:1100px) {
    font-size: 1.4rem;
  }

`

export const Menu = styled.ul`
  margin: 0px;
  list-style: none;
  float: left;
  padding-inline-start: 0px;
  width: 85%;
  @media (max-width:800px){
    display: inline-grid;
    width: 90%;
  }
`

export const Category = styled.li`
  position: relative;
  min-height: 4.2rem;
  float: left;
  display:flex;
  align-items:center;
  :hover > ul {
    display: block;
  } 
  padding: 0px;
  // At 800px, this component is hidden. Its display is controlled by a script.
  @media (max-width:800px){
    display: none;
    align-items:center;
    background: ${COLORS.green};
    width: 150px;
    :hover > ul {
      display: grid;
    } 

  }
  
`

export const Subcategory = styled.li`
  display: grid;
  align-items:center;
  min-height: 4.2rem;
  min-width: 15rem;
  background: ${COLORS.green};
  border-left: 5px solid ${COLORS.green};
  :hover {
    border-color: ${COLORS.orangeLight};
  }
  @media (max-width:800px){
    min-height: 4.2rem;
  }
`

export const SubcategoryList = styled.ul`
  color: ${COLORS.white};
  top: 4.2rem;
  list-style: none;
  position: absolute;
  background-color: ${COLORS.green};
  display: none;
  padding: 0px;
  transition: all 0.5s linear;
  // The menu shifted to the right. At 800px, the mobile version is activated
  @media (max-width:800px){
    left:150px;
    top: 0;
    width: 150px;
  }
`

export const CategoryName = styled.a`
  text-decoration: none;
  padding:0;
  padding-left: 1.5rem;
  display: inline-flex;
  vertical-align: middle;
  margin: 0px;
  transition: all 0.2s linear;
  :hover {
    color: ${COLORS.orangeLight};
    cursor: pointer;
  }
`

export const SubcategoryName = styled.a`
  
  text-decoration: none;
  padding-left: 1.5rem;
  :visited {
    color: ${COLORS.white};
  }
  :link {
    color: ${COLORS.white};
  }
  :hover {
    color: ${COLORS.orangeLight};
  }
`

export const LogoLink = styled.a`
  height: 75%;
  display: inline-flex;
  vertical-align: middle;
  @media (max-width:800px){
    overflow: hidden;
    height: 60%;
    text-align: center;
    justify-content: center;
    width: 150px;
  }
`

export const ImageLogo = styled.img`
  height:100%;
`

export const ContainerLogo = styled.li`
  height: 4.2rem;
  float: left;
  display: flex;
  flex-direction:row;
  align-items:center;
  z-index: 10;
  @media (max-width:800px){
    display: none;
    align-content: center;
    width: 150px;
    background: ${COLORS.green};
    
  }
 

`

export const MenuHamburger = styled.li`
  position: relative;
  height: 4.2rem;
  float: left;
  display: none;
  align-items: center;
  @media (max-width:800px){
    display: flex;
  }
`
export const LineHamburger = styled.div`
  background-color: ${COLORS.white};
  height: 0.4rem;
  width: 3.6rem;
  border-radius: 5px;

`
export const ContentHamburger = styled.a`
  text-decoration: none;
  //padding: 5px 10px;
  display: inline-grid;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 0px;
  transition: all 0.2s linear;
  height: 75%;
  :hover {
    color: ${COLORS.orangeLight};
    cursor: pointer;
  }
`
