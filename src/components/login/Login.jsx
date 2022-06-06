import React from "react";
import { Form,Button } from "react-bootstrap";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.loginContainer}
    style={{backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3/5ea364b1-8e59-4693-8ad8-f0eaee32d1bf/01c351de-df04-40e5-a38e-29e75096b88a/AR-es-20220530-popsignuptwoweeks-perspective_alpha_website_large.jpg)'}}>
      <Form className={styles.loginForm}>
        <h1>Inicia Sesión</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="white">Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button style={{background: '#e50914', borderColor: '#e50914'}} type="submit">
          Ingresar
        </Button>
      </Form>
    </div>
  );
}

export default Login;
