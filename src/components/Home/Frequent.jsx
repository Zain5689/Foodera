import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";

const Frequent = () => {
  return (
    <>
      <Container>
        <h2 className="my-5  text-center fw-bold fs-1 ">
          Frequently Asked Questions
        </h2>
        <Row>
          <Col md={6}>
            <div>
              <h3 className="fs-4 mb-3">
                <FontAwesomeIcon icon={faMinus} className="icon" /> Is Foodera
                Bread really baked fresh each day?
              </h3>
              <p className="mb-3 fs-6">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <h3 className="fs-4 mb-3">
                <FontAwesomeIcon icon={faMinus} className="icon" /> Do you bake
                breads containing animal fats or products?
              </h3>
              <p className="mb-3 fs-6">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <h3 className="fs-4 mb-3">
                <FontAwesomeIcon icon={faMinus} className="icon" />
                Can I order your products online?
              </h3>
              <p className="mb-3 fs-6">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <h3 className="fs-4 mb-3">
                <FontAwesomeIcon icon={faMinus} className="icon" />
                When are you opening a shop near me?
              </h3>
              <p className="mb-3 fs-6">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Frequent;
