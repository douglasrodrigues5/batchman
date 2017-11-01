import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Driver from './Drivers/Driver';
import Passenger from './Passengers/Passenger';
import Travel from './Travels/Travel';
import Welcome from './Welcome';

import EditDriver from './Drivers/EditDriver';
import './App.css';
import './Assets/helpers.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route path="/" component={Welcome} exact />
            <Route path="/passengers" component={Passenger} exact/>
            <Route path="/drivers" component={Driver} exact/>
            <Route path="/drivers/edit" component={EditDriver} exact/>
            <Route path="/travel" component={Travel} exact />
          </div>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
