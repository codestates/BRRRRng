import React, { useState } from "react";
import axios from "axios";

import { Alert } from "antd";
import "../mypage.css";
import "antd/dist/antd.css";

import Header from "../util/Header";
import Footer from "../util/Footer"
import SideMenu from "../util/SideMenu";
import ResultList from "./section/ResultList";

const CarSearch = () => {
  const [carname, setCarname] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [filteredCar, setFilteredCar] = useState([]);

  const searchMyCarHandler = (e) => {
    setCarname(e.currentTarget.value);
  };

  const mycarSearchHandler = (e) => {
    e.preventDefault();

    if (carname === "") {
      setErrorMessage(true);
    } else {
      const data = {
        carname: carname,
      };
      axios
        .post("https://api.brrrrng.ga/car/search", data, {
          withCredentials: true,
        })
        .then((response) => {
          setFilteredCar(response.data.carInfo);
        });

      setShowResult(true);
    }
  };

  setTimeout(() => {
    setErrorMessage(false);
  }, 1500);

  return (
    <div>
      <Header />
      <section>
        <div className="mypage_section_box">
          <div className="sideMenu_box">
            <SideMenu />
          </div>
          <div className="contents_box">
            <div className="search-box">
              {errorMessage ? (
                <Alert message="차명을 입력하세요." type="error" showIcon />
              ) : (
                ""
              )}
              <div className="title-area">
                <span>
                  <i className="fas fa-search"></i> 내 차 검색{" "}
                  <i className="fas fa-car"></i>
                </span>
              </div>
              <div className="search-area">
                <div className="search-input">
                  <input
                    onChange={searchMyCarHandler}
                    value={carname}
                    type="text"
                    placeholder="차량명을 입력하세요"
                  />
                </div>
                <div className="search-btn" onClick={mycarSearchHandler}>
                  <i className="fas fa-search"></i>
                </div>
              </div>
              {showResult ? <ResultList carinfo={filteredCar} /> : ""}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CarSearch;
