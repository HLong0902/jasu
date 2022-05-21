import React, { Component } from "react";
import UserService from "../../services/UserService";
import FindJasuView from "../../components/view/users/FindJasuView";
import "../../components/view/View.scss";
import "../../pages/TopNav.scss";
export default class UserControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDTOs: [],
    };
  }
  componentDidMount() {
    UserService.getUsers().then((res) => {
      this.setState({
        userDTOs: res.data.data,
      });
    });
  }

  render() {
    return (
      <div className="findJasu">
        <FindJasuView userList={this.state.userDTOs} />
      </div>
    );
  }
}
