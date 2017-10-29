import React, { Component } from 'react';
import Driver from './Drivers/Driver'
import Passenger from './Passengers/Passenger'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Passenger />
      </div>
    );
  }
}

export default App;
