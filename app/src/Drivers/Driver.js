import React, { Component } from 'react';
import DriverForm from './Form/DriverForm';
import { enableDiv } from '../Helpers/ux';

class Driver extends Component {
    render(){
        return(
            <div className="Driver">
                <h1> Hello, Driver. </h1>
                <h3> Register a new driver </h3>
                <DriverForm /> 
                <br />
                <a className="new-driver" onClick={() => enableDiv('form-driver')}> New driver </a>
            </div>
        );
    }
}

export default Driver;