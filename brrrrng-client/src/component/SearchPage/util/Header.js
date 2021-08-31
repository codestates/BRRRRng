import React, { useState } from "react";
import "../css/search.css";
import RightMenu from './section/Rightmemu'
const Header = () => {
  

  return (
    <div>
      <div class="nav-container">
        <div className="logo-container">
          <img src="../image/image 9.png" alt="logo" />
        </div>
         <RightMenu />
      </div>
    </div>
  );
};

export default Header;
