import React from 'react'
import { Link } from 'react-router-dom'
import '../mypage.css'
import Header from '../util/Header'
import SideMenu from '../util/SideMenu'
import ListTable from './section/ListTable'

import carInfo from '../../../dummydata/carInfo'


const Carlist = () => {
  return (
    <div>
      <Header />
      <section>

        <div className="mypage_section_box">

            <div className="sideMenu_box">
               <SideMenu />
            </div>
            <div className="contents_box">
            
                <div className="carlist-area">
                    <div className="carlist-title">
                        <i className="fas fa-clipboard-list"></i> 내 차 리스트
                    </div>
                    <div className="carlist-addBtn">
                        <Link to="/mypage/carsearch"><button><i className="fas fa-plus"></i> 추가하기</button></Link>
                    </div>
                    <ListTable carinfo={carInfo}/>
                </div>

            </div>
         </div>
    </section>

    </div>
  )
}

export default Carlist
