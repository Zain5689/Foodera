import { Col, Container, Row } from "react-bootstrap";
import about from "./../../assets/1.png";

const About = () => {
  return (
    <>
      <section className="my-5">
        <Container>
          <Row>
            <Col md={6}>
              <img
                src={about}
                alt="about"
                className="rounded-3"
                width={"100%"}
              />
            </Col>
            <Col md={6}>
              <h2 className="my-4 dw-bold fs-1 title">
                We pride ourselves on making real food from the best
                ingredients.
              </h2>
              <p className=" mb-5 fs-5 w-60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum amet leo.
              </p>
              <div className="btns ">
                <button className="border-0 px-5 py-2 btn ">Learn More</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default About;
