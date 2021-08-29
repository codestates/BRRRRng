import React from "react";
import "./css/search.css";
import Header from "./util/Header";
import Map from "./section/Map";
import List from "./section/List";

const Result = () => {
  return (
    <div>
      <Header />
      <section>
        <div className="resultSection_box">
          <div className="backBtn_container">
            <div>
              <i className="fas fa-long-arrow-alt-left"></i>
            </div>
            <div>
              <span>돌아가기</span>
            </div>
          </div>
          <div className="content_container">
            <div className="map_container">
              <Map />
            </div>
            <div className="list_container">
              <div className="lists">
                <List />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Result;
