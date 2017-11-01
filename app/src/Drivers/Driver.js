import React, { Component } from 'react';
import DriverForm from './Form/DriverForm';
import DriverLoginForm from './Form/DriverLoginForm';
import TravelForm from '../Travels/Form/TravelForm';
import { enableDiv, disableDiv } from '../Helpers/ux';
import DriverCard from './DriverCard';

class Driver extends Component {
    render(){
        return(
            <div className="driver">
                <h1> Hello, Driver. </h1>
                <DriverForm /> 
                <br />
                <h1>Or</h1>
                <DriverLoginForm />
                <br />
                <DriverCard />
                <br />
                <a className="new-driver" onClick={() => {enableDiv('form-driver'); disableDiv('form-travel')}}> New driver </a>
                <br />
                <TravelForm />
            </div>
        );
    }
}

export default Driver;