import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
const Login = () => {
  return (
    <div className="loginPage">
      <div className="loginContainer">
        <div id="loginImg-box">
          <img id="login" src="../image/login.png" alt="login image" />
        </div>
        <div className="loginForm-box">
          <ul className="loginForm">
            <li>
              <input className="loginInput" type="email" placeholder="email" />
            </li>
            <li>
              <input className="loginInput" type="password" placeholder="pw" />
            </li>
            <li>
              <div className="loginBtn-group">
                <button className="loginBtn login_btn" type="submit">Login</button>
                <Link className="login_btn signup_btn" to="/signup">Sign up</Link>
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
