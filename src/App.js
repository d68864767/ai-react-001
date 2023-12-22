import React, { Component } from 'react';
import Chat from './components/Chat';
import AI from './components/AI';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to React AI Website with Free GPT-4 Chat</h1>
        </header>
        <AI />
        <Chat />
      </div>
    );
  }
}

export default App;
