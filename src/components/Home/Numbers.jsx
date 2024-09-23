import { Col, Container, Row } from "react-bootstrap";

const Numbers = () => {
  return (
    <>
      <section className="numbers ">
        <Container>
          <Row>
            <Col lg={3} md={6} className="mb-5">
              <h2 className="fw-bold fs-1">1287+</h2>
              <span className="fw-bold">Savings</span>
            </Col>
            <Col lg={3} md={6} className="mb-5">
              <h2 className="fw-bold fs-1">5786+</h2>
              <span className="fw-bold">Photos</span>
            </Col>{" "}
            <Col lg={3} md={6} className="mb-5">
              <h2 className="fw-bold fs-1">1440+</h2>
              <span className="fw-bold">Rockets</span>
            </Col>{" "}
            <Col lg={3} md={6} className="mb-5">
              <h2 className="fw-bold fs-1">7110+</h2>
              <span className="fw-bold">Globes</span>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Numbers;
