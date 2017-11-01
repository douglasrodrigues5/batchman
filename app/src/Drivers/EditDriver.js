import React, { Component } from 'react';
import DriverLoginForm from './Form/DriverLoginForm';
import EditForm from './Form/EditForm';

class EditDriver extends Component{
    render(){
        return(
            <div>
                <DriverLoginForm />

                <h3> Current driver:
                <p id="current_driver">
                    {localStorage['current_driver_name']} 
                </p> 
            </h3>
                <EditForm />
            </div>
        );
    }
}

export default EditDriver;