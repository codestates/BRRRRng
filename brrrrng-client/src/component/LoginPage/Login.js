import React from 'react'
import './login.css'

const login = () => {
  return (
    <div className="loginPage">
      <header className="loginHeader" />
      <img id="login" src="../image/login.png" alt="login image" />
      <section className="loginContainer">
        <ul>
          <li><input className="loginInput" type="email" placeholder="email" /></li>
          <li><input className="loginInput" type="password" placeholder="pw" /></li>
          <li>
            <div className="loginBtn-group">
              <button className="loginBtn login_btn" type="submit">Login</button>
              <a className="loginBtn signup_btn" href="/signup" type>Sign up</a>
              <a className="loginBtn without_btn" id="without" href="search">Start without Login</a>
            </div>
          </li>
        </ul>
      </section>
      <footer>
        <img id="drive" src="../image/footer_img.png" alt="drive" />
      </footer>
    </div>
  )
}

export default login
