import React, { useState } from "react";
import { User } from "../App";
import TriggerTextBox from "./TriggerTextBox";
import Button from "./Button";
import "../css/login.css";
import Registration from "./RegistrationForm";

interface LoginItems {
  serverPort: number;
  loginSuccess: (user: User) => void;
  setIsLoggedIn?: (loggedIn: boolean) => void;
  onLogin?: () => void;
  onRegister?: () => void;
}

const Login: React.FC<LoginItems> = ({
  serverPort,
  loginSuccess,
  setIsLoggedIn,
  onLogin,
  onRegister,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showRegister, setRegister] = useState(false);

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleLoginClick = () => {
    var xhr = new XMLHttpRequest();
    let tmpEmail: string;
    let tmpPassword: string;
    let userDetails: string[];

    xhr.onload = () => {
      userDetails = xhr.responseText.split(",");

      if (xhr.response != "Incorrect login." && xhr.status == 200) {
        //if login successful

        let userEmail = userDetails[0];

        loginSuccess({
          email: userDetails[0],
          name: userDetails[1],
          type: userDetails[3],
          password: userDetails[2],
        });
      } else {
        // setEmail("");
        // setPassword("");
      }
    };
    xhr.open(
      "GET",
      "http://localhost:" + serverPort + "/login/" + email + "-" + password
    );
    xhr.send();
  };

  const handleRegisterClick = () => {
    setRegister(true);
  };

  const handleRegisterSuccess = (
    name: string,
    email: string,
    password: string
  ) => {
    // Assuming validation passes
    loginSuccess({
      email: email,
      name: name,
      type: "user",
      password: password,
    });
  };

  return (
    <div className="login-container">
      {showRegister ? (
        <Registration onRegistrationSuccess={handleRegisterSuccess} />
      ) : (
        <>
          <TriggerTextBox
            label="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <TriggerTextBox
            label="Password"
            value={password}
            onChange={handlePasswordChange}
            isPassword
          />
          {errorMessage && <div className="error">{errorMessage}</div>}
          <Button label="Login" onClick={handleLoginClick} />
          <Button label="Register" onClick={handleRegisterClick} />
        </>
      )}
    </div>
  );
};

export default Login;
