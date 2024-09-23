import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Ingredient from "./../../assets/2.png";

const Ingredients = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col md={5}>
              <div className="mt-5">
                <h2 className="mb-5 fs-1">
                  We make everything by hand with the best possible ingredients.
                </h2>
                <p className="fs-5 p mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio finibus bibendum in sit amet leo. Mauris
                  feugiat erat tellus.Far far away, behind the word mountains,
                  far from the countries Vokalia and Consonantia, there live the
                  blind texts.
                </p>
                <div className="mb-5">
                  <span className="fs-5">
                    <FontAwesomeIcon icon={faCheck} className="icon" />
                    Etiam sed dolor ac diam volutpat.
                  </span>
                  <br></br>
                  <span className="fs-5">
                    <FontAwesomeIcon icon={faCheck} className="icon" />
                    Erat volutpat aliquet imperdiet.
                  </span>
                  <br></br>
                  <span className="fs-5 ">
                    <FontAwesomeIcon icon={faCheck} className="icon" />
                    purus a odio finibus bibendum.
                  </span>
                </div>
                <div className="btns">
                  <button className="border-0 px-5 py-2 btn m-2">
                    Learn More
                  </button>
                </div>
              </div>
            </Col>
            <Col md={7}>
              <img src={Ingredient} alt="Ingredient" width={"100%"} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Ingredients;
