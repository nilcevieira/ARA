import { URL_BASE_API, URL_BASE_CLIENT } from "../../Url/urls";
import {
  Container,
  Icone,
  Item,
  ItemDetails,
  ItemList,
  Legend,
  Link,
  Span,
  Image,
} from "./styles";

export default function QuickAccess({ dataAcesso }) {
  return (
    <Container>
      <Span>Acesso Rápido</Span>
      <ItemList>
        {dataAcesso.map((item) => (
          <Item>
            <Link href={`${URL_BASE_CLIENT}/acesso-rapido/${item.slug}`}>
              <ItemDetails>
                <Icone>
                  <Image src={URL_BASE_API + item.icone.url}></Image>
                </Icone>
                <Legend>{item.nome}</Legend>
              </ItemDetails>
            </Link>
          </Item>
        ))}
      </ItemList>
    </Container>
  );
}
