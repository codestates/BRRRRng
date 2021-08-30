import React from 'react'
import { Empty } from "antd";
import "../../mypage.css";

const empty = () => {
  return (
    <div>
      <div className="result-area">
        <div className="result-table">
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>차명</th>
                <th>커넥트 타입</th>
                <th>급속 / 완속</th>
              </tr>
            </thead>
          </table>
          <br />
          <Empty />
        </div>
        
      </div>
    </div>
  )
}

export default empty
