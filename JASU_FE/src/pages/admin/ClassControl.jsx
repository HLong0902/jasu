import React, { Component } from 'react'
import ClassroomService from '../../services/ClassroomService'
import ClassControlView from '../../components/view/admin/ClassroomControlView'
import "../../components/view/View.scss";
import "../../pages/TopNav.scss";
export default class ClassControl extends Component {
    constructor(props) {
        super(props)
        this.state = {
            classrooms: []
        }
    }
    componentDidMount() {
        ClassroomService.getClassrooms().then((res) => {
            this.setState({ classrooms: res.data })
        });
    }
    render() {
        return (
            <div className='classControl'>
                <ClassControlView classroomList={this.state.classrooms}/>
            </div>
        )
    }
}
