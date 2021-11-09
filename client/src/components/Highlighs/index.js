import { Container, Link, Imagem } from "./style";
import { URL_BASE_API } from "../../Url/urls";

export default function Highlights({ dataDestaque }) {
  if (Object.values(dataDestaque).length > 0) {
    return (
      <Container onLoad={carousel()}>
        {dataDestaque.map((item) => (
          <Link href={item.link}>
            <Imagem name="slider-destaque" src={URL_BASE_API + item.capa.url}></Imagem>
          </Link>
        ))}
      </Container>
    );
  } else {
    return (
      <Container>
      </Container>
    );
  }

}


let slideIndex = 0;
function carousel() {
  let i;
  if (typeof window !== 'undefined') {
    let x = document.getElementsByName("slider-destaque");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
      slideIndex = 1;
    }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 5000); // Change image every 5 seconds
  }
  else {

  }
}

