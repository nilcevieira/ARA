import { Container, Content } from "./style";
import { URL_UPLOADS } from "../../Url/urls";


export default function Footer({ dataFooter }) {

  if (dataFooter == null) {
    return (
      <Container>
        <Content />
      </Container>
    );
  }

  else {
    return (
      <Container>
        <Content dangerouslySetInnerHTML={{ __html: dataFooter.rodape.replace("/uploads/", URL_UPLOADS) }} />
      </Container>
    );

  }
}
