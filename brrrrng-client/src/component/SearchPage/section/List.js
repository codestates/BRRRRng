import React, { useState } from "react";
import Detail from "./Detail";

const List = ({ station }) => {
  const [openModal, setOpenModal] = useState(false);

  const showModalHandler = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };

  const convertInfo = (cpStat) => {
    switch (cpStat) {
      case 1:
        return {
          class: "far fa-laugh-wink",
          status: "충전가능",
          color: "green",
        };
      case 2:
        return {
          class: "far fa-grin-beam-sweat",
          status: "충전중",
          color: "orange",
        };
      case 3:
        return {
          class: "far fa-grimace",
          status: "고장/점검",
          color: "red",
        };
      case 4:
        return {
          class: "far fa-frown",
          status: "통신장애",
          color: "red",
        };
      case 5:
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
    <>
      <div className="result" onClick={showModalHandler}>
        {/* <div className="charger_img">
          <img
            src="../image/free-icon-fuel-pump-3439491.png"
            alt="charging station"
            style={{ width: "40px", height: "50px" }}
          />
        </div> */}
        <div className="charger_description">
          <div className="status_sign">
            <img
              src="../image/free-icon-fuel-pump-3439491.png"
              alt="charging station"
              style={{ width: "30px", height: "30px", marginRight: "8px" }}
            />
            <span style={{ color: currentStatus.color }}>
              {currentStatus.status}
            </span>
          </div>
          <div className="charger_addr">
            <i class="fas fa-map-marker-alt"></i>
            <span> {station.addr}</span>
          </div>
        </div>
      </div>
      {openModal ? (
        <Detail setOpenModal={setOpenModal} station={station} />
      ) : (
        ""
      )}
    </>
  );
};

export default List;
