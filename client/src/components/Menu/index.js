import {
  Box,
  Content,
  SubContent,
  SubMenu,
  Menu,
  SubItem,
  Item,
  Img,
  Logo,
  MenuMobile,
  ContentMenuMobile,
  ContainerLogo,
} from "./styles.js";
import { URL_BASE_CLIENT } from "../../Url/urls.js";

export default function MenuBar({ dataMenu }) {
  return (
    <>
      <Box>
        <Menu>
          <MenuMobile>
            <ContentMenuMobile onClick={showMenu}> MENU </ContentMenuMobile>
          </MenuMobile>
          <ContainerLogo className="item-resp">
            <Logo href={URL_BASE_CLIENT}><Img src="/images/logo_ara_branca.png"></Img></Logo>
          </ContainerLogo>
          {dataMenu.map((item) => (
            <Item className="item-resp">
              <Content>{item.nome}</Content>
              <SubMenu>
                {item.subcategorias.map((sub) => (
                  <SubItem>
                    <SubContent
                      href={`${URL_BASE_CLIENT}/categoria/${sub.slug}`}
                    >
                      {sub.nome}
                    </SubContent>
                  </SubItem>
                ))}
              </SubMenu>
            </Item>
          ))}
        </Menu>
      </Box>
    </>
  );
}

function showMenu(){
  if (typeof window !== 'undefined') {
    let elements = document.getElementsByClassName('item-resp')
        Array.prototype.filter.call(elements, (element) => {
            if (element.style.display == 'none') {
                element.style.display = 'block'
            } else {
                element.style.display = 'none'
            }
        })
  }
}