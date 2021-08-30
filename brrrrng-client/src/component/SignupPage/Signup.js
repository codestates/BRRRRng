import React from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="signupPage">
      <div className="signupContainer">
        <div className="signupImg-box">
          <img id="login" src="../image/create.png" alt="create image" />
        </div>
        <div className="loginForm-box">
          <ul className="loginForm">
            <li>
              <input className="loginInput" type="text" placeholder="username" />
            </li>
            <li>
              <input className="loginInput" type="email" placeholder="email" />
            </li>
            <li>
              <input className="loginInput" type="password" placeholder="password" />
            </li>
            <li>
              <input className="loginInput" type="password" placeholder="repeat your password" />
            </li>
            <li>
              <div className="loginBtn-group">
                <button className="loginBtn login_btn" type="submit">Sign up</button>
                <Link className="login_btn without_btn" id="back" to="/login">
                  you have an account already?
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

export default Signup;
