import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import {
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";

const Appbar = () => {
  const [pathname, setPathname] = useState("");

  const location = useLocation();

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return (
    <>
      {pathname !== "/login" && (
        <Navbar className={styles.navbar} variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
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
                <Nav.Link as={Link} to="/">
                  Inicio
                </Nav.Link>
                <Nav.Link as={Link} to="/peliculas">
                  Películas
                </Nav.Link>
                <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to="/peliculas/accion">
                    Acción
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/peliculas/comedia">
                    Comedia
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/peliculas/drama">
                    Drama
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/favoritos">
                  Mi Lista
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Buscar"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
              <Button
                style={{ background: "#e50914", borderColor: "#e50914" }}
                as={Link}
                to="/login"
              >
                Iniciar Sesión
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default Appbar;
