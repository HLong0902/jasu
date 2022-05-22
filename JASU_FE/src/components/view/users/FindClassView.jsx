/* eslint-disable array-callback-return */
import React from "react";
import {useState} from "react";

function clear() {
    let input_search_box = document.getElementById("input_jasu_id");

    if (input_search_box.value.trim() !== "") {
        input_search_box.value = "";
    }
}

function search_btn() {
    let input_search_box = document.getElementById("input_jasu_id");
    input_search_box.value = input_search_box.value.trim();
    console.log(input_search_box.value);
}

const FindClassView = ({classroomList}) => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div>
            <div className="topNav" id="topNavId">
                <input
                    type="text"
                    className="input-txt"
                    id="input_jasu_id"
                    placeholder="Tìm kiếm"
                />
                <button className="btn clr" onClick={clear}>
                    <i className="bx bx-x  bx-sm"></i>
                </button>
                <button className="btn sch" onClick={search_btn}>
                    <i className="bx bx-search  bx-sm"></i>
                </button>
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

                                <p></p>
                            </li>
                        </div>
                    ))}
            </ul>
        </div>
    );
};
export default FindClassView;
