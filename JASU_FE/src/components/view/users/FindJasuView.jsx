/* eslint-disable array-callback-return */
import React from "react";
import { useState } from "react";
const changeSexId = (sexId) => {
  let sex = "Nam";
  if (sexId === "2") sex = "Nữ";
  return sex;
};
const changeVoiceId = (voiceId) => {
  let voice = "Miền Bắc";
  if (voiceId === "2") voice = "Miền Trung";
  else if (voiceId === "3") voice = "Miền Nam";
  return voice;
};

const changeLevelId = (levelId) => {
  let level = "";
  if (levelId === "1") level = "Sinh viên";
  else if (levelId === "2") level = "Gia sư";
  else if (levelId === "3") level = "Giáo viên";

  return level;
};

const FindJasuView = ({ userList }) => {
  const [searchTerm, setSearchTerm] = useState("");
  // console.log(userList);
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
          placeholder="Tìm kiếm theo tên"
        />
      </div>
      <ul className="jasu-lists">
        {userList
          .filter((value) => {
            if (searchTerm.trim() === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
            ) {
              return value;
            }
          })
          .map((item, index) => (
            <div key={index}>
              <li key={index}>
                <div className="userImg">
                  <img src={item.img} alt={item.fullName} />
                </div>
                <div className="userInfo" style={{ position: "relative" }}>
                  <p>Họ và tên: {item.name}</p>
                  <p>Giới tính: {changeSexId(item.sex)}</p>
                  <p>Giọng : {changeVoiceId(item.voice_region)}</p>
                  <p>
                    CV :{" "}
                    <a href={item.cv} target="_blank" style={{ color: "blue" }}>
                      {item.cv}
                    </a>
                  </p>
                  <p>Trình độ : {changeLevelId(item.level)}</p>
                </div>
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
};
export default FindJasuView;
