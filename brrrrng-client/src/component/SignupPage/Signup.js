import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { signupRequest } from '../../_actions/authAction'
import axios from 'axios'

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const signupHandler = (e) => {
    e.preventDefault()

    const data = {
      username: name,
      email: email,
      password: password
    }

    if(password !== passwordConfirm) {
      return alert('비밀번호가 틀립니다.')
    } else {
      dispatch(signupRequest(data))

      history.push('/login')

    }

  }
  return (
    <div className="signupPage">
      <div className="signupContainer">
        <div className="signupImg-box">
          <img id="login" src="../image/create.png" alt="create image" />
        </div>
        <div className="loginForm-box">
          <ul className="loginForm">
            <li>
              <input
                className="loginInput"
                type="text"
                placeholder="username"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
            </li>
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
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </li>
            <li>
              <input
                className="loginInput"
                type="password"
                placeholder="repeat your password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.currentTarget.value)}
              />
            </li>
            <li>
              <div className="loginBtn-group">
                <button 
                className="loginBtn login_btn" 
                type="submit"
                onClick={signupHandler}
                
                >
                  Sign up
                </button>
              </div>
              <div>
                <Link className="login_btn without_btn" id="back"to="/login">you have an account already?</Link>
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
