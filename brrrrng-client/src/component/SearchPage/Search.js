import React from "react";
import Header from "./util/Header";
import "./css/search.css";
const Search = () => {
  return (
    <div>
      <Header />
      <section>
        <div className="section_box">
          <div className="section-container">
            <div className="logoImg_container">
              <div className="logoImg">
                <img src="./image/free-icon-electric-station-3440014.png" />
              </div>
            </div>
            <div className="logo_container">
              <span>Where is My Charging Station?</span>
            </div>
            <div className="searchInput_container">
              <div className="searchInputs">
                <div className="select_box">
                  <select name="" id="">
                    <option value="1">서울특별시</option>
                  </select>
                </div>
                <div className="select_box">
                  <select name="" id="">
                    <option value="1">광진구</option>
                  </select>
                </div>
                <div className="input_box">
                  <input type="text" placeholder="상세주소를 입력하세요" />
                </div>
                <div className="searchBtn_box">
                  <button>
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
