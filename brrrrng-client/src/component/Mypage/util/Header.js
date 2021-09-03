import React from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Popover, Avatar } from "antd";
import "../mypage.css";
import { UserOutlined } from "@ant-design/icons";

const Header = () => {
  const text = (
    <div>
      <i className='fas fa-bolt' style={{ color: "red" }}></i> BRRRRng
    </div>
  );
  const content = (
    <div>
      <div className='popover-content'>
        <i className='fas fa-sign-out-alt'></i> Logout
      </div>
      <Link to='/mypage'>
        <div className='popover-content'>
          <i className='fas fa-car-alt'></i> My Car
        </div>
      </Link>
    </div>
  );

  return (
    <>
      <div className='mypage_nav-container'>
        <div className='mypage_logo-container'>
          <img src='../image/Logo.png' alt='logo' />
        </div>
        <div className='searchContainer'>
          <Link to='/search'>
            <div className='searchBar'>
              <span>Go to Search...</span>
              <i id='nav-search' className='fas fa-search'></i>
            </div>
          </Link>
        </div>

        <div className='user-icon-box'>
          <Popover
            placement='leftTop'
            title={text}
            content={content}
            trigger='click'
          >
            <Avatar
              size='large'
              icon={<UserOutlined />}
              style={{ marginRight: "30px" }}
            />
          </Popover>
        </div>
      </div>
    </>
  );
};

export default Header;
