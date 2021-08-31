import React,{ useState } from 'react';
import { Link } from "react-router-dom"
import "./main.css"

const Main = () => {

  return ( 
    <div className="sky">
      <div className="surface"></div>
      <div className="car">
        <img src="../image/eco_brng.png" alt="car" />
      </div>
      <div className="surface"></div>
      <div className="looking">전기차 충전소 찾을 땐,</div>
      <div className="fadeInLogo">
        <img src="../image/logo.png" alt="logo"></img>
      </div>
      <div className="car">
        <img src="../image/eco_brng.png" alt="car" />
      </div>
      <div className="driving">
        <img src="../image/driving.png" alt="driving" />
      </div>
      <div>
        <Link to="/login" id="startBtn">Start ➜
          {/* <img src="../image/startBtn.png" alt="start" />
          <img src="../image/start_hover.png" alt="start" /> */}
        </Link>
      </div>
    </div>
  )
}

export default Main
