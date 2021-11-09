import { Img, Slider } from "./styles";
import { URL_BASE_API } from "../../Url/urls";

export default function SliderImg({ dataSlider }) {
  if (Object.values(dataSlider).length > 0) {
    return (
      <Slider onLoad={carousel()}>
        {dataSlider.map((item) => (
          <Img name='slider-img' src={URL_BASE_API + item.Imagem.url}></Img>
        ))}
      </Slider>
    );
  }
  else {
    return (
      <Slider>

      </Slider>
    );
  }
}


let slideIndex = 0;
function carousel() {
  let i;
  if (typeof window !== 'undefined') {
    let x = document.getElementsByName("slider-img");
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
