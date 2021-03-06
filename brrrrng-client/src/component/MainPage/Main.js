import React from 'react';
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
        <img src="../image/Logo.png" alt="logo" />
      </div>
      <div className="car">
        <img src="../image/eco_brng.png" alt="car" />
      </div>
      <div className="driving">
        <img src="../image/driving.png" alt="driving" />
      </div>
      <div>
        <Link to="/login" id="startBtn">Login ➜</Link>
      </div>
    </div>
  )
}

export default Main;
