import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../mypage.css";

const SideMenu = () => {
  const menu = [
    { menu: "Home", icon: "fa-home", link: "/mypage" },
    { menu: "내차 리스트", icon: "fa-car-side", link: "/mypage/carlist" },
    { menu: "내 주소록", icon: "fa-address-book", link: "/mypage/addrlist" },
    { menu: "내 정보", icon: "fa-user-cog", link: "/mypage/user" },
  ];

  return (
    <>
      <div className="sideMenu_container">
        <ul>
          {menu.map((data, idx) => {
            return (
              <Link to={data.link}>
                {" "}
                <li
                  key={idx}
                  className="sideMenu"
                >
                  <i className={`fas ${data.icon}`}></i> {data.menu}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SideMenu;
