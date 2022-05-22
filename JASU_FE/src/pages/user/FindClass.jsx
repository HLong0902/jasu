import React, {Component} from "react";
import ClassroomService from "../../services/ClassroomService";
import FindClassView from "../../components/view/users/FindClassView";
import "../../components/view/View.scss";
import "../../pages/TopNav.scss";

class FindClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classrooms: [],
        };
    }

    componentDidMount() {
        ClassroomService.getClassrooms().then((res) => {
            this.setState({classrooms: res.data.data});
        });
    }

    render() {
        return (
            <div className="findClass">

                <FindClassView classroomList={this.state.classrooms}/>
            </div>
        );
    }
}

export default FindClass;
