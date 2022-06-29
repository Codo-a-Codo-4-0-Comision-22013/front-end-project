import React, { useState } from "react";
import { app } from "../Firebase/Firebase";
import { Form, Button } from "react-bootstrap";
import styles from "./Login.module.css";
import { auth, getAuth, signInWithEmailAndPassword,  } from "firebase/auth";
import firebase, { db } from "../Firebase/Firebase";
import { useFormInput } from "../utils/forms";
import { collection, getDocs } from "firebase/firestore";

var myDB = db;

function Login(props) {
  const username = useFormInput("");
  const password = useFormInput("");

  async function handleSubmit(event) {
    event.preventDefault();
    let jsonData = {
      username: username.value,
      password: password.value,
    };

    const auth = getAuth();
    const { user } = await signInWithEmailAndPassword(
      auth,
      username.value,
      password.value
    );

    props.onSuccess(user);
  }
  return (
    <div
      className={styles.loginContainer}
      style={{
        backgroundImage:
          "url(https://assets.nflxext.com/ffe/siteui/vlv3/5ea364b1-8e59-4693-8ad8-f0eaee32d1bf/01c351de-df04-40e5-a38e-29e75096b88a/AR-es-20220530-popsignuptwoweeks-perspective_alpha_website_large.jpg)",
      }}
    >
      <Form className={styles.loginForm}>
        <h1>Inicia Sesión</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="white">Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" {...username} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" {...password} />
        </Form.Group>
        <Button
          style={{ background: "#e50914", borderColor: "#e50914" }}
          onClick={handleSubmit}
        >
          Ingresar
        </Button>
      </Form>
    </div>
  );
}

const AuthenticatedUserApp = ({ user }) => {
  return (
    <div>
      <h1> You're logged as {user.email}</h1>
    </div>
  );
};

export { Login, AuthenticatedUserApp };
