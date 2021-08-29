import React from "react";
import "../mypage.css";
const SideMenu = () => {
  return (
    <>
      <div className="sideMenu_container">
        <div className="sideMenu active">
          <span className="active1">
            <i className="fas fa-home"></i> Home
          </span>
        </div>
        <div className="sideMenu">
          <i className="fas fa-car-side"></i> 내차 리스트
        </div>
        <div className="sideMenu">
          <i className="fas fa-address-book"></i> 내 주소록
        </div>
        <div className="sideMenu">
          <i className="fas fa-user-cog"></i> 내 정보
        </div>
      </div>
    </>
  );
};

export default SideMenu;
