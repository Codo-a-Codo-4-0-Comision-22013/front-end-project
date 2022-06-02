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
import styles from './Navbar.module.css'

const Appbar = () => {
  return (
    <Navbar className={styles.navbar} variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
            width="80"
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
