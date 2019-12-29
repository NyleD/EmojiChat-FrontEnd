import React from 'react';
import './App.css';
import { Component } from 'react';
import InitChat from './components/ChatForm'
import Chat from './components/Chat'
import WebSocketInstance from './services/WebSocket'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      loggedIn: false
    };
  }

  handleLoginSubmit = (username) => {
    this.setState({ loggedIn: true, username: username });
    WebSocketInstance.connect();
  }

  render() {
    const { 
      loggedIn,
      username
    } = this.state;

    return (
      <div className="App">
        { 
          loggedIn ?
          <Chat
            currentUser={username}
          />
          :
          <InitChat
            onSubmit={this.handleLoginSubmit}
            usernameChangeHandler={this.usernameChangeHandler}
          />
        }
      </div>
    );
  }
}

export default App;
