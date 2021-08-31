import React,{ useState } from 'react';
import { Link } from "react-router-dom"
import "./main.css"

const Main = () => {
  const [clicked, setClicked] = useState(false);
  const skipBtn = () => {
    setClicked(true);
  }

  return ( 
      <div class="sky">
        <div class="surface"></div>
        <div className="looking">전기차 충전소 찾을 땐,</div>
        <div className="fadeInLogo">
          <img src="../image/logo.png" alt="logo"></img>
        </div>
        <div class="car">
          <img src="../image/eco_brng.png" alt="car" />
        </div>
        <div class="driving">
          <img src="../image/drive.png" alt="driving" />
          {/* <Link to="/login">Start</Link> */}
        </div>
      </div>
      // <div class="sky">
      //   <button id="skipBtn" onClick={skipBtn}>skip ➜</button>
      //   <div class="surface"></div>
      //   <div class="car">
      //     <img src="../image/eco_brng.png" alt="car" />
      //   </div>
      // </div>
  )
}

export default Main
