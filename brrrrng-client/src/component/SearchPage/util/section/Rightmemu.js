import React, { useState } from "react";
import "../../css/search.css";

import { Link } from "react-router-dom";
import { Avatar, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";

const Rightmenu = () => {
  const [isLogout, setIsLogout] = useState(false);
  const id = localStorage.id;

  const logoutHandler = (e) => {
    e.preventDefault();
    const id = localStorage.id;
    axios.get(`https://api.brrrrng.ga/auth/${id}/logout`, {
      withCredentials: true,
    });
    localStorage.removeItem("id");
    setIsLogout(true);
  };

  const text = (
    <div>
      <i class='fas fa-bolt' style={{ color: "red" }}></i> BRRRRng
    </div>
  );
  const content = (
    <div>
      <div className='popover-content' onClick={logoutHandler}>
        <i class='fas fa-sign-out-alt'></i> Logout
      </div>
      <Link to='/mypage'>
        <div className='popover-content'>
          <i class='fas fa-car-alt'></i> My Car
        </div>
      </Link>
    </div>
  );

  if (localStorage.id && !isLogout) {
    return (
      <div className='menuBtn-container'>
        <Popover
          placement='leftTop'
          title={text}
          content={content}
          trigger='click'
        >
          <Avatar
            size='large'
            icon={<UserOutlined />}
            style={{ marginRight: "20px" }}
          />
        </Popover>
      </div>
    );
  } else {
    return (
      <div className='menuBtn-container'>
        <div className='btn'>
          <Link to='/'>
            <button>
              <i className='fas fa-home'></i> Home
            </button>
          </Link>
        </div>
        <div className='btn'>
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
        <div className='btn'>
          <Link to='/signup'>
            <button>Sign up</button>
          </Link>
        </div>
      </div>
    );
  }
};

export default Rightmenu;
