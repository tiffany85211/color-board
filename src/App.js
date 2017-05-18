import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './App.css';
import ColorPicker from './ColorPicker';

class App extends Component {
  constructor() {
    super();
    this.state = {
      colors: [],
    };
    this.handleAddColor = this.handleAddColor.bind(this);
    this.handleRemoveColor = this.handleRemoveColor.bind(this);
  }

  handleAddColor() {
    const colors = this.state.colors.slice();
    const newlist = {};
    colors.push(newlist);
    this.setState({ colors });
  }

  handleRemoveColor() {
    const colors = this.state.colors.slice();
    colors.splice(colors.length-1, 1);
    this.setState({ colors });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Color Board</h2>
          <div className="App-add">
            <FloatingActionButton mini={true} backgroundColor={'gray'} style={{margin:'5px'}} onClick={this.handleAddColor}>
              <ContentAdd />
            </FloatingActionButton>
            <FloatingActionButton mini={true} backgroundColor={'white'} style={{borderColor:'gray', margin:'5px'}} onClick={this.handleRemoveColor}>
            -
            </FloatingActionButton>
          </div>
        </div>
        <div className="App-colors">
          {this.state.colors.map((p, i) =>
            <ColorPicker
              id={i}
            />)}
        </div>
      </div>
    );
  }
}

export default App;
