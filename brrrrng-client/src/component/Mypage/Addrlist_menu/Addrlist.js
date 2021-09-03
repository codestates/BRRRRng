import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "../mypage.css";
import Header from "../util/Header";
import SideMenu from "../util/SideMenu";
import Footer from "../util/Footer";
import AddrEmpty from "./section/AddrEmpty";

import cityData from "../../../dummydata/cityData";

const Addrlist = () => {
  const [city, setCity] = useState("서울특별시");
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState("");

  const [address, setAddress] = useState("");
  const [userInfo, setUserInfo] = useState([]);

  const id = localStorage.id;
  const history = useHistory();
  useEffect(() => {
    cityData.map((data) => {
      if (data.city === city) {
        setDistricts(data.district);
      }
    });
  }, [city]);

  useEffect(() => {
    axios
      .get(`https://api.brrrrng.ga/user/${id}/info`, { withCredentials: true })
      .then((response) => {
        setUserInfo(response.data.userInfo.address);
      });
  }, [userInfo]);

  const citySelectHandler = (e) => {
    setCity(e.currentTarget.value);
  };
  const districtSelectHandler = (e) => {
    setDistrict(e.currentTarget.value);
  };

  const addressHandler = (e) => {
    setAddress(e.currentTarget.value);
  };

  const addToaddrListHandler = (e) => {
    e.preventDefault();

    const data = {
      address: `${city} ${district} ${address}`,
    };

    axios
      .put(`https://api.brrrrng.ga/user/${id}/address`, data)
      .then((response) => {
        if (response.data.success) {
          history.push("/mypage/addrlist");
        }
      });
  };

  const deleteMyaddrHandler = (address) => {
    
    const id = localStorage.id;

    const data = {
      data: {
        address: address,
      },
    };

    axios.delete(`https://api.brrrrng.ga/user/${id}/address`, data)
    
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
            <div className='addrlist_content'>
              <div className='carlist-title'>
                <i className='fas fa-clipboard-list'></i> 즐겨찾는 주소 리스트
              </div>
              <div className='searchInput_container'>
                <div className='addr_searchInputs'>
                  <div className='addr_select_box'>
                    <select name='' id='' onChange={citySelectHandler}>
                      {cityData.map((data, idx) => {
                        return (
                          <option key={idx} value={data.city}>
                            {data.city}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className='addr_select_box'>
                    <select name='' id='' onChange={districtSelectHandler}>
                      {districts.map((data, idx) => {
                        return (
                          <option key={idx} value={data}>
                            {data}
                          </option>
                        );
                      })}
                      ;
                    </select>
                  </div>

                  <div className='input_box'>
                    <input
                      type='text'
                      placeholder='상세주소를 입력하세요'
                      value={address}
                      onChange={addressHandler}
                    />
                  </div>
                  <div className='searchBtn_box'>
                    <button onClick={addToaddrListHandler}>ADD</button>
                  </div>
                </div>
              </div>
              <div className='addrlist_container'>
                <div className='addrlist-box'>
                  {userInfo.length === 0 ? (
                    <AddrEmpty />
                  ) : (
                    <div className='addrlist-table'>
                      <table>
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th>ADDRESS</th>
                            <th>OPTIONS</th>
                          </tr>
                        </thead>
                        <tbody>
                          {userInfo.map((data, idx) => {
                            return (
                              <tr key={idx + 1}>
                                <td id='dash-d'>{idx + 1}</td>
                                <td id='dash-td'>{data}</td>
                                <td>
                                  <i
                                    className='fas fa-trash-alt'
                                    onClick={() => deleteMyaddrHandler(data)}
                                  ></i>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
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

export default Addrlist;
