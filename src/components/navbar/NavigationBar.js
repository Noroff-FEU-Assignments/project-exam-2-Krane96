import {
  Navbar,
  Nav,
  Form,
  Button,
  Container,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Holidaze</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
