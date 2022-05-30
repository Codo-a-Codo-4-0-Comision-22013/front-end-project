import React from "react";
import Navbar from "react-bootstrap/Navbar";
import {
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Appbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="data:image/png;base64,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"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>Inicio</Nav.Link>
            <Nav.Link>Películas</Nav.Link>
            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
              <NavDropdown.Item>Acción</NavDropdown.Item>
              <NavDropdown.Item>Comedia</NavDropdown.Item>
              <NavDropdown.Item>Drama</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>Mi Lista</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Button variant="dark">Iniciar Sesión</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Appbar;
