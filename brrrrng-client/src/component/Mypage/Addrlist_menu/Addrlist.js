import React from "react";
import "../mypage.css";
import Header from "../util/Header";
import SideMenu from "../util/SideMenu";

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
            <div className="addrlist_content">
              <div className="carlist-title">
                <i className="fas fa-clipboard-list"></i> 즐겨찾는 주소 리스트
              </div>
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
                    <button>ADD</button>
                  </div>
                </div>
              </div>
              <div className="addrlist_container">
                <div className="addrlist-box">
                  <div className="addrlist-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>ADDRESS</th>
                          <th>OPTIONS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td id="dash-d">1</td>
                          <td id="dash-td">서울특별시 금천구 시흥동 123-1</td>
                          <td>
                            <i className="fas fa-trash-alt"></i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Addrlist;
