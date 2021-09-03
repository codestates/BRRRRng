import React from "react";
import "./css/search.css";
import cityData from "../../dummydata/cityData";

const SearchInput = ({ searchHandler, setAddress, setDistrict, setCity, districts }) => {
  
 

  const citySelectHandler = (e) => {
    setCity(e.currentTarget.value);
  };
  const districtSelectHandler = (e) => {
    setDistrict(e.currentTarget.value);
  };

  const searchInputHandler = (e) => {
    searchHandler(e);
  }

  return (
    <div className="section_box">
      <div className="section-container">
        <div className="logoImg_container">
          <div className="logoImg">
            <img
              src="./image/free-icon-electric-station-3440014.png"
              alt="icon"
            />
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
            <div className="select_box">
              <select name="" id="" onChange={districtSelectHandler}>
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
            <div className="searchBtn_box">
              <button onClick={searchInputHandler}>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
