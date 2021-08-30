import React from "react";
import "../css/search.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div class="nav-container">
        <div className="logo-container">
          <img src="../image/image 9.png" alt="logo" />
        </div>
        <div className="menuBtn-container">
          <div className="btn">
            <Link to="/">
              <button>
                <i className="fas fa-home"></i> Home
              </button>
            </Link>
          </div>
          <div className="btn">
            <Link to="login">
              <button>Login</button>
            </Link>
          </div>
          <div className="btn">
            <Link to="/signup">
              <button>Sign up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
