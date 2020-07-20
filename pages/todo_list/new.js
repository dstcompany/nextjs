import React, { Component } from 'react';
class newTodo extends Component {

  state = {
    "username": "",
    "title": "",
    "status": ""
  }

  constructor(props) {
    super(props);
  } 

  handleUsername = (event) => {
    console.log(event.target.value)
  }

  handleTitle = (event) => {
    console.log(event.target.value)
  }

  handleStatus = (event) => {
    console.log(event.target.value)
  }

  render(){

    return(
      <div>
        <div>
          <table>
            <tr>
              <td>Username</td>
              <td>
                <input type="text" placeholder="Input Username" onChange={this.handleUsername}/>
              </td>
            </tr>
            <tr>
              <td>Title</td>
              <td>
                <input type="text" placeholder="Input Title" onChange={this.handleStatus}/>
              </td>
            </tr>
            <tr>
              <td>Status</td>
              <td>
                <input type="text" placeholder="Input Status" onChange={this.handleClick}/>
              </td>
            </tr>
          </table>
          <button onClick={this.handleClick}>Save</button>
        </div>
      </div>
    )
  }
}

export default newTodo;