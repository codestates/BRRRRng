import React from "react";
import "../../mypage.css";

const ListTable = ({ carinfo }) => {
  console.log(carinfo);
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
            {carinfo.map((data, idx) => {
              return (
                <tr key={idx}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td className="table-d">{data.carname}</td>
                  <td>{data.connect_type}</td>
                  <td>{data.manufacturer}</td>
                  <td>
                    <i className="fas fa-trash-alt"></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListTable;
