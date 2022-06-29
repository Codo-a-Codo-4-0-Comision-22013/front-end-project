import React, { useEffect, useState } from "react";
import { useFormInput } from "../utils/forms";
import { URL } from "../../constant";
import { Login, AuthenticatedUserApp } from "./Login";
import Profile from "../Profile/Profile";

const ControlLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user !== null) {
      setIsLoggedIn(true);
    }
  }, [user]);

  return isLoggedIn ? (
    <AuthenticatedUserApp user={user} />
  ) : (
    <Login onSuccess={setUser} />
  );
};

export default ControlLogin;
