import React from "react";

const List = () => {
  return (
    <>
      <div className="result">
        <div className="charger_img">
          <img src="../image/free-icon-fuel-pump-3439491.png" />
        </div>
        <div className="charger_description">
          <div className="status_sign">
            <span>Available</span>
          </div>
          <div className="charger_addr">
            <span>서울특별시 광진구 구의동 777-1 홈플러스 2층 주차장</span>
          </div>
          <div className="car_type">
            <span>충전가능 차량 : 아이오닉, i30, Tesla</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
