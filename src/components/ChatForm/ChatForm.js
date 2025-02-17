 import React, { Component } from 'react';
import './ChatForm.scss';

export default class ChatForm extends Component {

  constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
    }

  usernameChangeHandler = (event) =>  {
    this.setState({
      username: event.target.value
    })
  }

  render() {

    return (
      <div className="login">
        <form onSubmit={() => this.props.onSubmit(this.state.username)} className="form">
           <input
              typxe="text"
              onChange={this.usernameChangeHandler}
              placeholder="Enter your Username"
              required />
            <button className="submit" type="submit" value="Submit">
              Let's Chat
            </button>
         </form>
      </div>
    );
  }
}
