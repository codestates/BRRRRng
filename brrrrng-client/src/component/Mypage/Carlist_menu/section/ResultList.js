import React, { useState } from "react";
import "../../mypage.css";
import Empty from "./Empty";

const ResultList = ({ carinfo }) => {
  const [currentIdx, setCurrentIdx] = useState(null);
  const [checked, setChecked] = useState(false);
 
  const addToMycarlist = (data, idx) => {
    console.log(data)
    setCurrentIdx(idx);
    setChecked(!checked)
  };

  return (
    <div className="result-box">
      {carinfo.length === 0 ? (
        <Empty />
      ) : (
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
              <tbody>
                {carinfo.map((data, idx) => {
                  return (
                    <tr key={idx} onClick={() => addToMycarlist(data, idx)}>
                      <td>
                        {currentIdx === idx && checked ? (
                          <input type="checkbox" id={currentIdx} checked />
                        ) : (
                          <input type="checkbox" />
                        )}
                      </td>
                      <td className="table-d">{data.carname}</td>
                      <td>{data.connect_type}</td>
                      <td>{data.manufacturer}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="addBtn-box">
            <div>
              <button>추가하기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultList;
