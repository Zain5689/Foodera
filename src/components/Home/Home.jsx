import { Container, Modal } from "react-bootstrap";
import About from "./About";
import Hero from "./Hero";
import Ingredients from "./Ingredients";
import Numbers from "./Numbers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import modalImg from "./../../assets/4.jpg";
import Slider from "./Slider";
import Card from "./Card";
import Frequent from "./Frequent";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Hero />
      <Numbers />
      <About />
      <Ingredients />
      <section className="video mb-5">
        <Container>
          <div>
            <h2 className="tit mb-3">
              When a mans stomach is full it makes no difference whether he is
              rich or poor.
            </h2>
            <p className=" mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis dolorem nobis accusamus alias laudantium voluptas
              mollitia quasi earum suscipit veritatis, aspernatur laboriosam!
              Animi inventore autem culpa amet fugit, quam magni!
            </p>
            <a onClick={handleShow}>
              <FontAwesomeIcon icon={faPlay} className="icon fs-4" /> Watch Our
              Story
            </a>
          </div>
        </Container>
      </section>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ p: 2 }}
      >
        <img src={modalImg} alt="Modal" width={"100%"} height={"100%"} />
      </Modal>
      <Card />
      <Slider />
      <Frequent />
      <hr style={{ borderBottom: "2px solid #a82c48" }}></hr>
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
