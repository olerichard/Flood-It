import React, { Component } from 'react';
import './App.css';
import Game from './components/game/game'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-title">FLOOD-IT</div>
        </header>
          <Game />
      </div>
    );
  }
}

export default App;
