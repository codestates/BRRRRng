import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginRequest, auth } from "../../_actions/authAction";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const loginHandler = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    dispatch(loginRequest(data)).then(response => {
      if (response.payload.success) {
        console.log(response.payload);
       localStorage.setItem('accessToken', response.payload.accessToken) 
        history.push("/search");

      }
    });

  };

  return (
    <div className="loginPage">
      <div className="loginContainer">
        <div className="loginImg-box">
          <img id="login" src="../image/login.png" alt="login image" />
        </div>
        <div className="loginForm-box">
          <ul className="loginForm">
            <li>
              <input
                className="loginInput"
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </li>
            <li>
              <input
                className="loginInput"
                type="password"
                placeholder="pw"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </li>
            <li>
              <div className="loginBtn-group">
                <button
                  className="loginBtn login_btn"
                  type="submit"
                  onClick={loginHandler}
                >
                  Login
                </button>
                <Link className="login_btn signup_btn" to="/signup" type>
                  Sign up
                </Link>
                <Link className="login_btn without_btn" id="without" to="/search">
                  Start without Login
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="carImg-box">
        <img src="../image/footer_img.png" alt="drive" />
      </div>
    </div>
  );
};

export default Login;
