import React from 'react'
import '../mypage.css'
import Header from '../util/Header'
import SideMenu from '../util/SideMenu'
import Footer from '../util/Footer'

const Addrlist = () => {
  // const [] = useState()

  return (
    <div>
    <Header />
    <section>

      <div className="mypage_section_box">

          <div className="sideMenu_box">
            <SideMenu />
          </div>
          <div className="contents_box">
            {/* <div className="address-title">
              <div>My Address List</div>
            </div> */}
            <div className="searchInput_container">
              <div className="searchInputs">
                <div className="select_box">
                  <select name="" id="">
                    <option value="1">시도</option>
                  </select>
                </div>
                <div className="select_box">
                  <select name="" id="">
                    <option value="1">시군구</option>
                  </select>
                </div>
                <div className="input_box">
                  <input type="text" placeholder="상세주소를 입력하세요" />
                </div>
                <div className="searchBtn_box">
                  <button>
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
              
          </div>
      </div>
  </section>
    <Footer />
  </div>
  )
}

export default Addrlist
