import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bar from './bar/Bar';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Your Round!</h2>
        </div>
        <div className="App-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
