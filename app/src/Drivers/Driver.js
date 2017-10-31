import React, { Component } from 'react';
import DriverForm from './Form/DriverForm';
import DriverLoginForm from './Form/DriverLoginForm';
import TravelForm from '../Travels/Form/TravelForm';
import { enableDiv, disableDiv } from '../Helpers/ux';

class Driver extends Component {
    render(){
        return(
            <div className="Driver">
                <h1> Hello, Driver. </h1>
                <DriverForm /> 
                <br />
                Or
                <br />
                <DriverLoginForm />
                <a className="new-driver" onClick={() => {enableDiv('form-driver'); disableDiv('form-travel')}}> New driver </a>
                <br />
                <br />
                <TravelForm />
            </div>
        );
    }
}

export default Driver;