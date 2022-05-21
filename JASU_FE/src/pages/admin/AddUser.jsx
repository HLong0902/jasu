import React, { Component } from 'react'
import './AddUserLayout.scss'
export default class AddUser extends Component {
  render() {
    return (
      <div className="container">
        <form action="/addUser">
          <label className="add-txt" htmlFor="fname">Tên</label>
          <input type="text" id="fname" name="firstname" placeholder="Nhập tên"/>
      
          <label htmlFor="country">Quê quán</label>
          <select id="country" name="country">
            <option value="BacNinh">Bắc Ninh</option>
            <option value="HaNoi">Hà Nội</option>
            <option value="NamDinh">Nam Định</option>
          </select>
          <a href="/userControl" className="add-back">Back</a>
        </form>
      </div>
    )
  }  
}
