import { Carousel, Container } from "react-bootstrap";
import slide1 from "./../../assets/t1.jpg";
import slide2 from "./../../assets/t2.jpg";
import slide3 from "./../../assets/t3.jpg";

const Slider = () => {
  return (
    <>
      <section className="Testimonials">
        <Container>
          <h1>Testimonials</h1>
          <Carousel>
            <Carousel.Item>
              <img src={slide1} alt="First slide" />
              <Carousel.Caption>
                <h5>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </h5>
                <p>Maccy Doe - Front End</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={slide2} alt="Second slide" />
              <Carousel.Caption>
                <h5>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </h5>
                <p>Maccy Doe - Front End</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={slide3} alt="Third slide" />
              <Carousel.Caption>
                <h5>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </h5>
                <p>Maccy Doe - Front End</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
    </>
  );
};

export default Slider;
