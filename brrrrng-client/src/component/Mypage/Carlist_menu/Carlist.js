import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../mypage.css'
import Header from '../util/Header'
import Footer from '../util/Footer'
import SideMenu from '../util/SideMenu'
import ListTable from './section/ListTable'

import axios from 'axios'

const Carlist = () => {

  const [myCarlist, setMyCarlist] = useState([])
  useEffect(() => {
    
    const id = localStorage.id
    axios.get(`https://api.brrrrng.ga/user/${id}/info`, {withCredentials: true}).then(response => {
      
      setMyCarlist(response.data.userInfo.carinfo)
    })

  }, [myCarlist])

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
                    <ListTable carinfo={myCarlist}/>
                </div>

            </div>
         </div>
    </section>
    <Footer />
    </div>
  )
}

export default Carlist
