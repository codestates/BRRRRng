import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import "./css/search.css";
import Kakaomap from "./section/Kakaomap";
import Header from './util/Header'
import List from "./section/List";

const Result = () => {

  const size = [600, 600];
  const history = useHistory();
  const stations = useSelector(({ chargersReducer }) => chargersReducer.chargerStations);
  
  const filtered = stations.map((data) => {
    return {
      addr: data.addr._text,
      chargeTp: data.chargeTp._text,
      cpStat: data.cpStat._text,
      cpNm: data.cpNm._text,
      cpTp: data.cpTp._text,
      csNm: data.csNm._text,
      lat: Number(data.lat._text),
      longi: Number(data.longi._text),
      statUpdateTime: data.statUpdateDatetime._text,
    };
  });

  const backBtnHandler = (e) => {
    e.preventDefault();
    history.push('/search')
  };


  return (
    <div>
       <Header />
      <section>
        <div className='resultSection_box'>
          <div className='backBtn_container' onClick={backBtnHandler}>
            <div>
              <i className='fas fa-long-arrow-alt-left'></i>
            </div>
            <div>
              <span>돌아가기</span>
            </div>
          </div>

          <div className='content_container'>
            <div className='map_container'>
              <Kakaomap chargingStations={filtered} size={size} />
            </div>
            <div className='list_container'>
              <div className='lists'>
                {filtered.map((station, idx) => {
                  return <List key={idx} station={station} />;
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