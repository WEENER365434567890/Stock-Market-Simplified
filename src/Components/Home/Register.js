import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Register.css";
import { auth } from "../../firebase";

function Register() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/app");
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/app");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="register">
      <section className="register_navbar">
        <div id="navbar">
          <div id="navbarItems">
            <Link to="/">
              <span className="register_navbar_routes"> Home </span>
            </Link>
            <Link to="/about">
              <span className="register_navbar_routes"> About </span>
            </Link>
            <Link to="/versions">
              <span className="register_navbar_routes"> Versions </span>
            </Link>
          </div>
        </div>
      </section>

      <div className="register_container">
        <h1>Sign in with Firebase</h1>
        <div className="register_conatiner_center">
          <div className="register_conatiner_center_tab">
            <h3>Email</h3>
            <input
              type="text"
              value={email}
              placeholder="Create Dummy Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="register_conatiner_center_tab">
            <h3>Password</h3>
            <input
              type="password"
              value={password}
              placeholder="Create Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <br />

          <p className="register_container_center_disclaimer">
            Do not use your personal email account (an email of pizza@gmail.com
            with a password of 123456 is perfect!) This login feature is hosted
            by Google's Firebase Authentication and the email and password
            combination only works for this website. Firebase console allows me
            to view all emails created ,but all passwords are encrypted.
          </p>
        </div>
      </div>
      <div className="register_container_buttons">
        <button
          className="register_container_center_button"
          type="submit"
          onClick={register}
        >
          Create&nbsp;Account
        </button>
        <button
          className="register_container_center_button"
          onClick={signIn}
          type="submit"
        >
          Sign&nbsp;In
        </button>
      </div>
    </div>
  );
}

export default Register;
