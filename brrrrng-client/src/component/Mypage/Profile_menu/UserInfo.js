import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "../mypage.css";
import Header from "../util/Header";
import SideMenu from "../util/SideMenu";
import Footer from '../util/Footer'


const UserInfo = () => {

  const [userInfo, setUserInfo] = useState("")
  const history = useHistory();
  useEffect(() => {
    const id = localStorage.id;
    axios
      .get(`https://api.brrrrng.ga/user/${id}/info`, { withCredentials: true })
      .then((response) => {
        setUserInfo(response.data.userInfo)
      });
  }, []);

  const deleteUserHandler = (e) => {
    e.preventDefault();
    const id = localStorage.id;

    axios
      .delete(`https://api.brrrrng.ga/user/${id}/delete`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.success) {
          history.push("/login");
          localStorage.removeItem("id");
        }
      });
  };

  return (
    <div>
      <Header />
      <section>
        <div className='mypage_section_box'>
          <div className='sideMenu_box'>
            <SideMenu />
          </div>
          <div className='contents_box'>
            <div className='userinfo_box'>
              <div className='userinfo-title'>{userInfo.username}'s 정보</div>
              <div className='userinfo_icon-area'>
                <i className='fas fa-user-circle'></i>
              </div>
              <div className='userinfo_info-area'>
                <div className='userinfo_info'>
                  <div className='infoTable'>
                    <div className='info-box'>
                      <i className='fas fa-user'></i> Name : {userInfo.username}
                    </div>
                    <div className='info-box'>
                      <i className='far fa-paper-plane'></i> Email :
                      {userInfo.email}
                    </div>
                    <div className='info-box'>
                      <i className='fas fa-lock'></i> Password : *******
                    </div>
                  </div>
                </div>
              </div>
              <div className='userinfo-btn_area'>
                <div className='deleteBtn'>
                  <button onClick={deleteUserHandler}>계정삭제하기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UserInfo;
