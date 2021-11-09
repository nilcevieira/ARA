import { Texto, Titulo, Container, Tags, Anexos, ContainerTitulo, Anexo } from "./styles";
import { URL_UPLOADS } from "../../Url/urls";

export default function PostUnit({ dataPost }) {
  return dataPost.map((item) => (
    <Container>
      <Titulo>{item.titulo}</Titulo>
      <Texto dangerouslySetInnerHTML={{ __html: item.texto.replace("/uploads/", URL_UPLOADS) }} />
      <Tags><b>Tags:</b> {item.tags}</Tags>
      <Anexos><b>Anexos:</b>{item.anexos.map((anexo) => (
        <Anexo target="_blank" href={anexo.url.replace("/uploads/", URL_UPLOADS)}> {anexo.name}</Anexo>
      ))}</Anexos>
    </Container>
  ));
}
