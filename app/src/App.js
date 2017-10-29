import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Driver from './Drivers/Driver';
import Passenger from './Passengers/Passenger';
import Travel from './Travels/Travel';
import logo from './logo.svg';
import './App.css';
import './Assets/helpers.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/passengers" component={Passenger} exact/>
            <Route path="/drivers" component={Driver} exact/>
            <Route path="/travel" component={Travel} />
          </div>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
