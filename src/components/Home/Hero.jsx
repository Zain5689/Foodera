import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="hero">
      <Container>
        <Row>
          <Col md={6}>
            <h2 className="my-5 dw-bold title">
              Good food choices are good investments.
            </h2>
            <p className="fs-6 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum amet leo.
            </p>
            <div className="btns">
              <button className="border-0 px-5 py-2 btn m-2">
                order Now
                <FontAwesomeIcon icon={faBasketShopping} className="ms-4" />
              </button>
              <button className="border-0 px-5 py-2 btn m-2">
                Learn More
                <FontAwesomeIcon icon={faChevronRight} className="ms-4" />
              </button>
            </div>
          </Col>
          <Col md={6}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
