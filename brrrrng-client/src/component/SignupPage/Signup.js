import React from 'react'
import '../LoginPage/login.css'

const Signup = () => {
  return (
    <div className="loginPage">
      <header className="loginHeader" />
      <img id="create" src="../image/create.png" alt="create image" />
      <section className="loginContainer">
        <ul>
          <li><input className="loginInput" type="text" placeholder="username" /></li>
          <li><input className="loginInput" type="email" placeholder="email" /></li>
          <li><input className="loginInput" type="password" placeholder="password" /></li>
          <li><input className="loginInput" type="password" placeholder="repeat your password" /></li>
          <li>
            <div className="loginBtn-group">
              <button className="loginBtn login_btn" type="submit">Sign up</button>
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

export default Signup
