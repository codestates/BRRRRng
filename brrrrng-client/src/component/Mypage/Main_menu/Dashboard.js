import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import "../mypage.css";
import Header from "../util/Header";
import SideMenu from "../util/SideMenu";
import AddrCard from "./section/AddrCard";
import CarinfoCard from "./section/CarinfoCard";

import { getStations } from "../../../_actions/apiAction";

const Dashboard = () => {
 
  const [address, setAddress] = useState([]);
  const [carInfo, setCarInfo] = useState([]);
  const [car, setCar] = useState("");
  const [addr, setaddr] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const id = localStorage.id;
    axios
      .get(`https://api.brrrrng.ga/user/${id}/info`, { withCredentials: true })
      .then((response) => {
        setAddress(response.data.userInfo.address);
        setCarInfo(response.data.userInfo.carinfo);
        setCar(response.data.userInfo.carinfo[0]);
        setaddr(response.data.userInfo.address[0]);
      });
  }, []);

  const searchMyStation = (e) => {
    e.preventDefault();

    const data = {
      address: addr,
    };

    dispatch(getStations(data)).then((response) => {
      if (response.payload) {
        history.push("/search/result");
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
            <div className='wrapper'>
              <card className='list_card1'>
                <div className='card_title'>My Address</div>
                <div className='card_content'>
                  <div className='list_box'>
                    <div id='card_img' className='label'></div>
                    <div className='content1'>
                      <table id='dash-table'>
                        <span>
                          <i className='fas fa-map-marker-alt'></i>
                        </span>
                        <span> {addr ? addr : ""}</span>
                      </table>
                    </div>
                    <button onClick={searchMyStation} id='dash-addBtn'>
                      나의 충전소 위치 찾기
                    </button>
                  </div>
                </div>
              </card>
              <card className='list_card1'>
                <div className='card_title'>My Car INFO</div>
                <div className='card_content'>
                  <div className='list_box'>
                    <div id='card_img' className='label'></div>
                    <div className='content1'>
                      <table id='dash-table'>
                        <th id='userInfo'>
                          <i className='fas fa-car'></i>My car
                        </th>
                        <th id='userInfo'>{car ? car.carname : ""}</th>
                        <tr>
                          <th id='userInfo'>Connection Type</th>
                          <th id='userInfo'>{car ? car.chargetype : ""}</th>
                        </tr>
                      </table>
                    </div>
                    {/* 차리스트 없으면 표시 <button id="addBtn">내 차 정보 추가하기</button> */}
                  </div>
                </div>
              </card>
              <AddrCard address={address.length !== 0 ? address : ""}/>
              <CarinfoCard carinfo={carInfo.length !== 0 ? carInfo : ""} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
