import React from "react";
import io from "socket.io-client";
//import config from '../config';

import Messages from "../Messages";
import ChatInput from "../ChatInput";

require("./ChatApp.css");

class ChatApp extends React.Component {
  socket = {};
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.sendHandler = this.sendHandler.bind(this);

    // Connect to the server
    let socket_url = window.location.href.split(window.location.pathname)[0];
    this.socket = io(socket_url, {
      query: `username=${props.username}`
    }).connect();

    // Listen for messages from the server
    this.socket.on("server:message", message => {
      this.addMessage(message);
    });
  }

  sendHandler(message) {
    const messageObject = {
      username: this.props.username,
      message
    };

    // Emit the message to the server
    this.socket.emit("client:message", messageObject);

    messageObject.fromMe = true;
    this.addMessage(messageObject);
  }

  addMessage(message) {
    // Append the message to the component state
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

  render() {
    return (
      <div className="container">
        <div className="card text-center">
          <div className="card-header">Chat</div>
          <div className="card-body chat-card-body">
            <div className="row h-100">
              <div className="col-2">
                <div className="card text-center h-100">
                  <div className="card-header">Users Online</div>
                  <div className="card-body">
                  </div>
                </div>
              </div>
              <div className="col-10">
                <div className="card h-100">
                  <Messages messages={this.state.messages} />
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <ChatInput onSend={this.sendHandler} />
          </div>
        </div>
      </div>
    );
  }
}
ChatApp.defaultProps = {
  username: "Anonymous"
};

export default ChatApp;
