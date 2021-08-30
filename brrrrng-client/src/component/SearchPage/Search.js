import React, { useState, useEffect } from "react";
import Header from "./util/Header";
import "./css/search.css";

import cityData from "../../dummydata/cityData";

const Search = () => {
  const [city, setCity] = useState("서울특별시");
  const [districts, setDistricts] = useState([])
  const [district, setDistrict] = useState("")
  const [address, setAddress] = useState("")

  const citySelectHandler = (e) => {
    setCity(e.currentTarget.value);
  };

  useEffect(() => {
    cityData.map((data) => {
      if (data.city === city) {
        setDistricts(data.district);
      }
    });
  }, [city]);

  const districtSelectHandler = (e) => {
    setDistrict(e.currentTarget.value)
  }

  const addressHandler = (e) => {
    setAddress(e.currentTarget.value)
  }

  const searchHandler = (e) => {
      
       e.preventDefault();

  }

 
  return (
    <div>
      <Header />
      <section>
        <div className="section_box">
          <div className="section-container">
            <div className="logoImg_container">
              <div className="logoImg">
                <img src="./image/free-icon-electric-station-3440014.png" alt="icon"/>
              </div>
            </div>
            <div className="logo_container">
              <span>Where is My Charging Station?</span>
            </div>
            <div className="searchInput_container">
              <div className="searchInputs">
                <div className="select_box">
                  <select name="" id="" onChange={citySelectHandler}>
                    {cityData.map((data, idx) => {
                      return (
                        <option key={idx} value={data.city}>
                          {data.city}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="select_box" >
                  <select name="" id="" onChange={districtSelectHandler}>
                    {districts.map((data, idx) => {
                      return (
                        <option key={idx} value={data}>
                          {data}
                        </option>
                      )})};
                  </select>
                </div>
                <div className="input_box">
                  <input 
                  onChange={addressHandler}
                  value={address}
                  type="text" 
                  placeholder="상세주소를 입력하세요" 
                  />
                </div>
                <div className="searchBtn_box">
                  <button onClick={searchHandler}>
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
