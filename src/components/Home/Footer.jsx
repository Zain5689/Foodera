import { Button, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="mb-0">
        <Container className="mb-0">
          <ul className="mb-3">
            <li>Register</li>
            <li>Forum</li>
            <li> Affiliate </li>
            <li>FAQ</li>
          </ul>
          <div className="mb-3">
            <Button variant="link" className="text-dark ">
              <FontAwesomeIcon icon={faFacebookF} className="icons" />
            </Button>

            <Button variant="link" className="text-dark ">
              <FontAwesomeIcon icon={faTwitter} className="icons" />
            </Button>

            <Button variant="link" className="text-dark ">
              <FontAwesomeIcon icon={faGoogle} className="icons" />
            </Button>

            <Button variant="link" className="text-dark">
              <FontAwesomeIcon icon={faInstagram} className="icons" />
            </Button>

            <Button variant="link" className="text-dark">
              <FontAwesomeIcon icon={faLinkedin} className="icons" />
            </Button>

            <Button variant="link" className="text-dark ">
              <FontAwesomeIcon icon={faGithub} className="icons" />
            </Button>
          </div>
          <p>© 2024. Foodera. All rights reserved.</p>
        </Container>
      </footer>
    </>
  );
};
export default Footer;
