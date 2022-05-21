import React, { Component } from "react";
import UserService from "../../services/UserService";
import ClassroomService from "../../services/ClassroomService";
import UserControlView from "../../components/view/admin/UserControlView";
import "../../pages/TopNav.scss";

class UserControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      clasrooms: [],
    };
  }
  componentDidMount() {
    UserService.getUsers().then((res) => {
      this.setState({ users: res.data });
    });
    ClassroomService.getClassrooms().then((res) => {
      this.setState({ classrooms: res.data });
    });
  }
  render() {
    return (
      <div className="userControl">
        <UserControlView userList={this.state.users} />
      </div>
    );
  }
}

export default UserControl;
