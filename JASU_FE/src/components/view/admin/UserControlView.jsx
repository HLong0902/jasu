/* eslint-disable array-callback-return */
import React from "react";
import { useState } from "react";
import removeAccents from "../../funtionLogic/removeAccents"
import changeSexId from "../../funtionLogic/changeSexId";
import changeVoiceId from "../../funtionLogic/changeVoiceId";
import changeLevelId from "../../funtionLogic/changLevelId";
import "../View.scss";
const UserControlView = ({ userList }) => {
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
        {userList
          .filter((value) => {
            if (searchTerm.trim() === "") {
              return value;
            } else if (
              removeAccents(value.name).toLowerCase().includes(removeAccents(searchTerm).trim().toLowerCase())
            ) {
              return value;
            }
          })
          .map((item, index) => (
            <li key={index}>
              <div className="userImg">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="_in4" style={{ position: "relative" }}>
                <p>Họ và tên: {item.name}</p>
                <p>Age: {item.age}</p>
                <p>Giới tính: {changeSexId(item.sex)}</p>
                <p>Add: {item.address}</p>
                <p>Sđt: {item.phone}</p>
                <a href={item.cv}>CV: {item.cv}</a>
                <p>Trạng thái kích hoạt: {item.isAccess}</p>
                <p>Email: {item.email}</p>
                <p>Giọng: {changeVoiceId(item.voice_region)}</p>
                <p>Trình độ: {changeLevelId(item.level)}</p>
              </div>
              <div
                className="icon_"
                style={{
                  cursor: "pointer",
                }}
              >
                <button>
                  <i className="bx bxs-edit bx-md"></i>
                </button>
                <button>
                  <i className="bx bx-user-x bx-md"></i>
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default UserControlView;
