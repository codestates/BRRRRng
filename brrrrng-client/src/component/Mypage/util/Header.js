import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Popover, Avatar } from "antd";
import "../mypage.css";
import { UserOutlined } from "@ant-design/icons";

const Header = () => {
  const text = <span>Title</span>;
  const content = (
    <div>
     <i id="nav-search" className="fas fa-search"></i>
     <p>Content</p>
 
      <p>Content</p>
     
    </div>
  );

  return (
    <>
      <div className="mypage_nav-container">
        <div className="mypage_logo-container">
          <img src="../image/Logo.png" />
        </div>
        <div className="searchContainer">
          <Link to="/search">
            <div className="searchBar">
              <i id="nav-search" className="fas fa-search"></i>
            </div>
          </Link>
        </div>

        <div className="user-icon-box">
          <Popover
            placement="leftTop"
            title={text}
            content={content}
            trigger="click"
          >
            <Avatar size="large" icon={<UserOutlined />} style={{ marginRight : "20px"}} />
          </Popover>
        </div>
      </div>
    </>
  );
};

export default Header;
