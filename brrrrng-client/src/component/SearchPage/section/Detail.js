import React from "react";
import "../css/search.css";
import Map from "./Map";

const Detail = ({ setOpenModal, station }) => {
  
  const modalHandler = (e) => {
    e.preventDefault();

    setOpenModal(false);
  };

  const convertInfo = (cpStat) => {
    switch (cpStat) {
      case "1":
        return {
          class: "far fa-laugh-wink",
          status: "충전가능",
          color: "green",
        };
      case "2":
        return {
          class: "far fa-grin-beam-sweat",
          status: "충전중",
          color: "orange",
        };
      case "3":
        return {
          class: "far fa-grimace",
          status: "고장/점검",
          color: "red",
        };
      case "4":
        return {
          class: "far fa-frown",
          status: "통신장애",
          color: "red",
        };
      case "5":
        return {
          class: "fas fa-exclamation-triangle",
          status: "통신미연결",
          color: "red",
        };
      default:
        return "";
    }
  };

  const currentStatus = convertInfo(station.cpStat);

  const cpTpInfo = (cpTp) => {
    switch (cpTp) {
      case 1:
        return "B타입(5핀)";
      case 2:
        return "C타입(5핀)";
      case 3:
        return "BC타입(5핀)";
      case 4:
        return "BC타입(7핀)";
      case 5:
        return "DC차데모6";
      case 6:
        return "AC3상";
      case 7:
        return "DC콤보";
      case 8:
        return "DC차데모+DC콤보";
      default:
        return "";
    }
  };

  return (
    <div>
      <div className="place-info-window uk-modal">
        <div className="uk-modal-dialog">
          <div className="close-btn">
            <i className="fas fa-times" onClick={modalHandler}></i>
          </div>
          <div className="charger_status_sign">
            <span style={{ color: currentStatus.color }}>
              <i className={currentStatus.class}></i> {currentStatus.status}
            </span>
          </div>
          <div className="detail-description-box">
            <div className="detail-description">
              <div className="detail-table">
                <div className="D_box">
                  <i className="fas fa-map-marker-alt"></i> 주소
                  <div>{station.addr}</div>
                </div>
                <div className="D_box">
                  <span className="D_icon">
                    <i className="fas fa-bolt"></i>
                  </span>
                  <span className="D_text">
                    급속/완속 : {station.chargeTp === 1 ? "완속" : "급속"}
                  </span>
                </div>
                <div className="D_box">
                  <span className="D_icon">
                    <i className="far fa-id-badge"></i>
                  </span>
                  <span className="D_text">충전기 명칭 : {station.cpNm}</span>
                </div>

                {cpTpInfo(station.cpTp) === "" ? (
                  ""
                ) : (
                  <div className="D_box">
                    <span className="D_icon">
                      <i className="fas fa-charging-station"></i>
                    </span>
                    <span className="D_text">
                      충전타입 : {cpTpInfo(station.cpTp)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="modal_map_container">
            <Map lat={station.lat} longi={station.longi} />
          </div>
          <div className="getDirectBtn_container">
            <div className="getDirectBtn">
              <a href="https://map.kakao.com">
                <button>GET DIRECTION</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
