import { URL_BASE_CLIENT } from "../../Url/urls";
import {
  Container,
  Span,
  Post,
  Title,
  Cover,
  ShortDesc,
  Description,
  Error,
  Img,
} from "./styles";
import { URL_UPLOADS } from "../../Url/urls";

export default function Posts({ dataPost}) {
  if (Object.values(dataPost).length > 0) {
    return (
      <Container>
        <Span>Publicações</Span>
        {dataPost.map((item) => (
          <Post href={`${URL_BASE_CLIENT}/post/${item.slug}`}>
            <Cover><Img src={item.capa.url.replace("/uploads/", URL_UPLOADS)}></Img></Cover>
            <Description>
              <Title>{item.titulo}</Title>
              <ShortDesc>{item.resumo}</ShortDesc>
            </Description>
          </Post>
        ))}
      </Container>
    );
  } else {
    return (
      <Container>
        <Span>Publicações</Span>
        <Error>Nenhuma publicação foi encontrada</Error>
      </Container>
    );
  }
}
