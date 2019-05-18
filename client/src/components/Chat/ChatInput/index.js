import React from "react";

class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chatInput: "" };

    // React ES6 does not bind 'this' to event handlers by default
    this.submitHandler = this.submitHandler.bind(this);
    this.textChangeHandler = this.textChangeHandler.bind(this);
    this.clearHandler = this.clearHandler.bind(this);
  }

  submitHandler() {
    // Clear the input box
    this.setState({ chatInput: "" });

    // Send only if not an empty string.
    let chatString = this.state.chatInput.trim();
    if (chatString !== "") {
      // Call the onSend callback with the chatInput message
      this.props.onSend(chatString);
    }
  }

  clearHandler() {
    // Clear the input box
    this.setState({ chatInput: "" });

    // Call the onClear callback
    this.props.onClear();
  }

  textChangeHandler(event) {
    this.setState({ chatInput: event.target.value });
  }

  render() {
    return (
      <div className="row">
        <textarea
          className="form-control m-1"
          onChange={this.textChangeHandler}
          value={this.state.chatInput}
          placeholder="Write a message..."
          required
        />
        <button
          type="button"
          className="btn btn-primary m-1"
          onClick={this.submitHandler}
        >
          Send
        </button>
        <button
          type="button"
          className="btn btn-danger m-1"
          onClick={this.clearHandler}
        >
          Clear
        </button>
      </div>
    );
  }
}

ChatInput.defaultProps = {};

export default ChatInput;
