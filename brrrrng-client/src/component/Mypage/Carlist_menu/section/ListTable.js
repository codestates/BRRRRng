import React from "react";
import '../../mypage.css'

const ListTable = () => {
  return (
    <>
      <div className="carlist-table">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" name="" id="" />
              </th>
              <th>차명</th>
              <th>커넥트 타입</th>
              <th>급속 / 완속</th>
              <th>OPTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td className="table-d">아이오닉</td>
              <td>DC콤보(7핀)</td>
              <td>급속</td>
              <td>
                <i className="fas fa-trash-alt"></i>
              </td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" />
              </td>
              <td className="table-d">아이오닉</td>
              <td>DC콤보(7핀)</td>
              <td>완속</td>
              <td>
                <i className="fas fa-trash-alt"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListTable;
