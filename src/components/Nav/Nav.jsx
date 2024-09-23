import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./../../assets/logo.png";
import "./Nav.css";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="haeder">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="nav">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>About Us</Nav.Link>
              <Nav.Link>Explore Foods</Nav.Link>
              <Nav.Link>Reviews</Nav.Link>
              <Nav.Link>Reviews</Nav.Link>
              <Nav.Link>FAQ</Nav.Link>
              <Nav.Link className="number">12345698722</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
