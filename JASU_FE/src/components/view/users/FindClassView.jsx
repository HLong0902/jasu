/* eslint-disable array-callback-return */
import React from "react";
import { useState } from "react";
const FindClassView = ({ classroomList }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <div className="topNav" id="topNavId">
        <input
          type="text"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          className="input-txt"
          id="input_jasu_id"
          placeholder="Tìm kiếm theo tên, phone, email, facebook, ..."
        />
      </div>
      <ul>
        {classroomList
          .filter((value) => {
            if (searchTerm.trim() === "") {
              return value;
            } else if (
              value.id_teachers.toLowerCase().includes(searchTerm.trim().toLowerCase())
            ) {
              return value;
            }
          })
          .map((item, index) => (
            <div key={index}>
              <li key={index}>
                <p>Giáo viên: {item.id_teachers}</p>

                <p> </p>
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
};
export default FindClassView;
