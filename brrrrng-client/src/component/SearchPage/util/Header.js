import React from "react";
import '../css/search.css'

const Header = () => {
  return (
    <div>
      <div class="nav-container">
        <div className="logo-container">
          <img src="../image/image 9.png" />
        </div>
        <div className="menuBtn-container">
          <div className="btn">
            <button>
              <i className="fas fa-home"></i> Home
            </button>
          </div>
          <div className="btn">
            <button>Login</button>
          </div>
          <div className="btn">
            <button>Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
