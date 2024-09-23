import { Button, Container, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <section className="contact ">
        <Container>
          <h3 className="mb-3 fs-1 fw-bold">
            Hurry up! Subscribe our newsletter<br></br> and get 25% Off
          </h3>
          <p>Limited time offer for this month. No credit card required.</p>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Email address there"
              className="me-4 rounder-0 p-2 outline-0"
              aria-label="Search"
              style={{ border: "1px solid #777" }}
            />
            <Button
              className="rounded-0 py-2 px-5 border-0 fw-bold "
              style={{ background: "#a82c48 ", color: "#fff" }}
            >
              Subscribe
            </Button>
          </Form>
        </Container>
      </section>
    </>
  );
};

export default Contact;
