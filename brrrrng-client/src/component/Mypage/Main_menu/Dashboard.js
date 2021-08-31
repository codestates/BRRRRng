import React from "react";
import "../mypage.css";
import Header from "../util/Header";
import SideMenu from "../util/SideMenu";
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <Header />
      <section>
        <div className="mypage_section_box">
          <div className="sideMenu_box">
            <SideMenu />
          </div>
          <div className="contents_box">
            <div className="wrapper">
              <card className="list_card">
                <div className="card_title">Address</div>
                <div className="card_content">
                  <div className="list_box">
                    <div id="label" className="label">
                      <i
                        className="fas fa-user-circle fa-5x"
                        id="user-circle"
                      ></i>
                    </div>
                    <div className="content1">
                      <table id="dash-table">
                        <th id="userInfo">ADDRESS</th>
                        <th id="userInfo">서울특별시 금천구 시흥동 123-1</th>
                      </table>
                    </div>
                    <button id="dash-addBtn">나의 충전소 위치 찾기</button>
                  </div>
                </div>
              </card>
              <card className="list_card">
                <div className="card_title">My Car INFO</div>
                <div className="card_content">
                  <div className="list_box">
                    <div id="label" className="label">
                      <i className="fas fa-car fa-5x"></i>
                    </div>
                    <div className="content1">
                      <table id="dash-table">
                        <th id="userInfo">My car</th>
                        <th id="userInfo">i3</th>
                        <tr>
                          <th id="userInfo">Connection Type</th>
                          <th id="userInfo">DC콤보(7핀)</th>
                        </tr>
                      </table>
                    </div>
                    {/* 차리스트 없으면 표시 <button id="addBtn">내 차 정보 추가하기</button> */}
                  </div>
                </div>
              </card>
              <card className="list_card">
                <div className="card_title">즐겨찾기 주소록</div>
                <div className="card_content">
                  <div className="list_box">
                    <div className="carlist-table">
                      <table id="dash-table">
                        <thead id="dash-thead">
                          <tr>
                            <th id="dash-addr-th">Id</th>
                            <th id="dash-addr-th">ADDRESS</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="table-addr-d" id="dash-d">
                              1
                            </td>
                            <td className="table-addr-d" id="dash-td">
                              서울특별시 금천구 시흥동 123-1
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="moreBtn-box">
                  <Link to="/mypage/addrlist"><button id="moreBtn">More</button></Link>
                </div>
              </card>
              <card className="list_card">
                <div className="card_title">등록된 차 리스트</div>
                <div className="card_content">
                  <div className="list_box">
                    <div className="carlist-table">
                      <table id="dash-table">
                        <thead id="dash-thead">
                          <tr>
                            <th id="dash-th">CAR</th>
                            <th id="dash-th">CONNECTION TYPE</th>
                            <th id="dash-th">CHARGE TYPE</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="table-d" id="dash-td">
                              아이오닉
                            </td>
                            <td id="dash-td">DC콤보(7핀)</td>
                            <td id="dash-td">급속</td>
                          </tr>
                          <tr>
                            <td className="table-d" id="dash-td">
                              아이오닉
                            </td>
                            <td id="dash-td">DC콤보(7핀)</td>
                            <td id="dash-td">완속</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="moreBtn-box">
                  <Link to="/mypage/carlist"><button id="moreBtn">More</button></Link>
                </div>
              </card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
