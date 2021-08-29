import React from "react";
import "../mypage.css";
import Header from "../util/Header";
import SideMenu from "../util/SideMenu";

const CarSearch = () => {












  
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
              <div className="title-area">
                <span>
                  <i className="fas fa-search"></i> 내 차 검색{" "}
                  <i className="fas fa-car"></i>
                </span>
              </div>
              <div className="search-area">
                <div className="search-input">
                  <input type="text" placeholder="차량명을 입력하세요" />
                </div>
                <div className="search-btn">
                  <i className="fas fa-search"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarSearch;
