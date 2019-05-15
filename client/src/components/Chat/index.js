import React, { Component } from "react";
import io from "socket.io-client";
import "./chat.css";

// This file exports the chat component.

class Chat extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  constructor(props) {
    super(props);
    this.status = null;
    this.messages = null;
    this.textarea = null;
    this.username = null;
    this.clearBtn = null;
  }

  // Called after render() on initial mount so DOM elements are available.
  componentDidMount() {
    this.status = document.getElementById("status");
    this.messages = document.getElementById("messages");
    this.textarea = document.getElementById("textarea");
    this.username = document.getElementById("username");
    this.clearBtn = document.getElementById("clear");

    this.statusDefault = this.status.textContent;

    // Connect to socket.io
    let socket_url = window.location.href.split(window.location.pathname);
    console.log("Connect to : " + socket_url);
    this.socket = io.connect(socket_url[0]);

    // Check for connection
    if (this.socket !== undefined) {
      console.log("Connected to socket ...");

      // Handle Output
      this.socket.on("output", data => {
        console.log(data);
        if (data.length) {
          console.log("length = " + data.length);
          for (let x = 0; x < data.length; x++) {
            console.log(data[x]);
            // Build out message div
            let message = document.createElement("div");
            message.setAttribute("class", "chat-message");
            message.textContent = data[x].name + ": " + data[x].message;
            this.messages.appendChild(message);
            this.messages.insertBefore(message, this.messages.firstChild);
          }
        }
      });

      // Get Status from server.
      this.socket.on("status", data => {
        // get message status
        this.setStatus(typeof data === "object" ? data.message : data);

        // If status is clear, clear text
        if (data.clear) {
          this.textarea.value = "";
        }
      });

      // Handle input
      this.textarea.addEventListener("keydown", event => {
        if (event.which === 13 && event.shiftKey === false) {
          // Emit to server input
          this.socket.emit("input", {
            name: this.username.value,
            message: this.textarea.value
          });

          this.textarea.value = "";

          event.preventDefault();
        }
      });

      // Handle Chat Clear
      this.clearBtn.addEventListener("click", () => {
        this.socket.emit("clear");
      });

      // Clear message
      this.socket.on("cleared", () => {
        this.messages.textContent = "";
      });
    }
  }

  // Set the status message with a timer to clear it after 4000 ms.
  setStatus = s => {
    // Set status
    this.status.textContent = s;

    if (s !== this.statusDefault) {
      setTimeout(() => {
        this.setStatus(this.statusDefault);
      }, 4000);
    }
  };

  render() {
    return (
      <div className="div">
        <h1 className="Chat-header">
          Chatterbox
          <button id="clear" className="btn btn-danger Chat-clear-btn">
            Clear
          </button>
        </h1>
        <div id="status" />
        <div id="chat">
          <input
            type="text"
            id="username"
            className="form-control"
            placeholder="Enter name..."
          />
          <br />
          <div className="card">
            <div id="messages" className="card-block" />
          </div>
          <br />
          <textarea
            id="textarea"
            className="form-control"
            placeholder="Enter message ..."
          />
        </div>
      </div>
    );
  }
}

export default Chat;
