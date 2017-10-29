import React, { Component } from 'react';
import Driver from './Drivers/Driver';
import Passenger from './Passengers/Passenger';
import {BrowserRouter, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './Assets/helpers.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/passengers" component={Passenger} />
            <Route path="/drivers" component={Driver}/>
          </div>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
