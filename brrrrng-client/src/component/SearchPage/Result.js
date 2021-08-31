import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/search.css";
import Header from "./util/Header";
import List from "./section/List";


import axios from "axios";
import Kakaomap from "./section/Kakaomap";

const Result = () => {
 
  const [chargerStations, setChargerStations] = useState([]);
  const size = [600, 600];

  useEffect(() => {

    
   
    axios.get("http://localhost:4000/api").then((result) => {
      console.log(result.data.response.body.items.item);
      // setChargerStations(result.data.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <section>
        <div className="resultSection_box">
          <Link to="/search">
            <div className="backBtn_container">
              <div>
                <i className="fas fa-long-arrow-alt-left"></i>
              </div>
              <div>
                <span>돌아가기</span>
              </div>
            </div>
          </Link>
          <div className="content_container">
            <div className="map_container">
              <Kakaomap chargerStations={chargerStations} size={size} />
            </div>
            <div className="list_container">
              <div className="lists">
                {chargerStations.map((station, idx) => {
                  return <List key={idx} station={station}/>;
                })}
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default Result;
