import React, { Component } from "react";
import ClassroomService from "../../services/ClassroomService";
import FindClassView from "../../components/view/users/FindClassView";
import "../../components/view/View.scss";
import "../../pages/TopNav.scss";
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
class FindClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classrooms: [],
    };
  }
  componentDidMount() {
    ClassroomService.getClassrooms().then((res) => {
      this.setState({ classrooms: res.data });
    });
  }

  render() {
    return (
      <div className="findClass">
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
        <FindClassView classroomList={this.state.classrooms} />
      </div>
    );
  }
}
export default FindClass;
