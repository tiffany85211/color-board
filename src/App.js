import React, { Component } from 'react';
import './App.css';
import ColorPicker from './ColorPicker';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pickers: [],
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Color Board</h2>
        </div>
        <ColorPicker />
        <ColorPicker />
        <ColorPicker />
      </div>
    );
  }
}

export default App;
