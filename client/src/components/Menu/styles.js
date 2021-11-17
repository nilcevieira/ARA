import styled from "styled-components"

export const NavigationArea = styled.nav`
  font-size: 1.6rem;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 17, 1) 0%,
    rgba(0, 0, 48, 1) 100%
  );
  width: 100%;
  height: 4.2rem;
  color: #e7e7e7;
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
    background: linear-gradient(
    90deg,
    rgba(0, 0, 17, 1) 0%,
    rgba(0, 0, 48, 1) 100%
    );
    min-width: 200px;
    width: 200px;
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
  background: linear-gradient(
    90deg,
    rgba(0, 0, 17, 1) 0%,
    rgba(0, 0, 48, 1) 100%
  );
  border-left: 5px solid #000011;
  :hover {
    border-color: #ff9c00;
  }
  @media (max-width:800px){
    min-height: 4.2rem;
  }
`

export const SubcategoryList = styled.ul`
  top: 4.2rem;
  list-style: none;
  position: absolute;
  background-color: #fff;
  display: none;
  padding: 0px;
  transition: all 0.5s linear;
  // The menu shifted to the right. At 800px, the mobile version is activated
  @media (max-width:800px){
    left:200px;
    top: 0;
    width: 200px;
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
    color: #ff9c00;
    cursor: pointer;
  }
`

export const SubcategoryName = styled.a`
  text-decoration: none;
  padding-left: 1.5rem;
  :visited {
    color: #e7e7e7;
  }
  :link {
    color: #e7e7e7;
  }
  :hover {
    color: #ff9c00;
  }
`

export const LogoLink = styled.a`
  height: 75%;
  display: inline-flex;
  vertical-align: middle;
  @media (max-width:800px){
    height: 60%;
    text-align: center;
    justify-content: center;
    width: 200px;
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
    width: 200px;
    background: linear-gradient(
    90deg,
    rgba(0, 0, 17, 1) 0%,
    rgba(0, 0, 48, 1) 100%
    );
    
  }
 

`

export const MenuMobileButton = styled.li`
  position: relative;
  height: 4.2rem;
  float: left;
  display: none;
  align-items: center;
  @media (max-width:800px){
    display: flex;
    
  }
`

export const ContentButton = styled.a`
  text-decoration: none;
  padding: 5px 10px;
  display: block;
  margin: 0px;
  transition: all 0.2s linear;
  :hover {
    color: #ff9c00;
    cursor: pointer;
  }
`
