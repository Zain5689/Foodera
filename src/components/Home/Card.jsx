import { Container, Card as BootstrapCard, Row, Col } from "react-bootstrap";
import data from "./../../Data/Data";

const FoodCard = () => {
  const info = data;
  console.log(info);

  return (
    <>
      <section className="my-5">
        <Container>
          <div className="my-5">
            <h2 className="text-center mb-5 ">Explore Our Foods</h2>
            <p className="text-center mb-5 w-50 mx-auto fs-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus. Far far away, behind the word mountains, far from the
              countries Vokalia and Consonantia, there live the blind texts.
              Separated they live in Bookmarksgrove.
            </p>
            <Row>
              {info.map((item, index) => (
                <Col key={index} md={4}>
                  <BootstrapCard className="mb-4">
                    <BootstrapCard.Img variant="top" src={item.img} />
                    <BootstrapCard.Body>
                      <BootstrapCard.Title>{item.title}</BootstrapCard.Title>
                      <BootstrapCard.Text>{item.time}</BootstrapCard.Text>
                      <BootstrapCard.Text>
                        {item.price} -- $11.70
                      </BootstrapCard.Text>
                    </BootstrapCard.Body>
                    <BootstrapCard.Body>
                      <div className="btns">
                        <button className="border-0 px-5 py-2 btn m-2">
                          order Now
                        </button>
                      </div>
                    </BootstrapCard.Body>
                  </BootstrapCard>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default FoodCard;
