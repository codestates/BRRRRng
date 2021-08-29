import React from 'react'
import '../mypage.css'

const Header = () => {
  return (
    <>
      <div className="mypage_nav-container">
        <div className="mypage_logo-container">
          <img src="../image/Logo.png" />
        </div>
        <div className="searchContainer">
          <div className="searchBar"><i id="nav-search" className="fas fa-search"></i></div>
        </div>
        <div className="user-icon-box">
          <div className="user-icon"><i className="fas fa-user-circle fa-2x"></i></div>
        </div>
      </div>
    </>
  )
}

export default Header
