import React, { Component } from 'react';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      input: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  handleSendMessage = () => {
    this.setState(state => {
      const messages = state.messages.concat(state.input);
      return {
        messages,
        input: '',
      };
    });
  }

  render() {
    return (
      <div className="Chat">
        <h2>Chat with GPT-4</h2>
        <div className="Chat-messages">
          {this.state.messages.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </div>
        <input
          value={this.state.input}
          onChange={this.handleInputChange}
          type="text"
          placeholder="Type your message here..."
        />
        <button onClick={this.handleSendMessage}>Send</button>
      </div>
    );
  }
}

export default Chat;
