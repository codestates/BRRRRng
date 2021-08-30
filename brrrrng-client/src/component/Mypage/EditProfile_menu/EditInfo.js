import React from "react";
import "../mypage.css";
import { Link } from "react-router-dom";
import Header from "../util/Header";
import SideMenu from "../util/SideMenu";

const EditInfo = () => {
  return (
    <div>
      <Header />
      <section>
        <div className="mypage_section_box">
          <div className="sideMenu_box">
            <SideMenu />
          </div>
          <div className="contents_box">
            <div className="edituserinfo_box">
              <div className="edituserinfo-title">guest's 정보</div>
              <div className="edituserinfo_icon-area">
                <i className="fas fa-user-circle"></i>
              </div>
              <div className="editform_box">
                <div className="input_box">
                  <div className="label">
                    <i class="fas fa-user"></i> Name{" "}
                  </div>
                  <div className="input">
                    <input type="text" value="kimcoding" />
                  </div>
                </div>
                <div className="input_box">
                  <div className="label">
                    <i class="far fa-paper-plane"></i> Email
                  </div>
                  <div className="input">
                    <input type="text" value="kimcoding123@gmail.com" />
                  </div>
                </div>
                <div className="input_box">
                  <div className="label">
                    <i class="fas fa-lock"></i> Password
                  </div>
                  <div className="input">
                    <input type="password" value="kimcoding" />
                  </div>
                </div>
                <div className="input_box">
                  <div className="label">Password confirm</div>
                  <div className="input">
                    <input type="password" value="kimcoding" />
                  </div>
                </div>
              </div>
              <div className="saveBtn_box">
                <div className="saveBtn">
                  <Link to="/mypage/user">
                    <button>수정 취소</button>
                  </Link>
                </div>
                <div className="saveBtn">
                  <button>수정 완료</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditInfo;
