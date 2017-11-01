import React, { Component } from 'react';

class DriverCard extends Component{
    render(){
        return(
            <div id="driver-card">
                
                <h3> Current driver:
                <p id="current_driver">
                    {localStorage['current_driver_name']} 
                </p>
                <p id="driver_status">
                    Status: {(localStorage['current_driver_status'] !== "false" ? "active":"inactive" )}
                </p> 
                <a href="/drivers/edit/">
                    EDIT DRIVER STATUS
                </a>
                </h3>
            </div>
        );
    }
}

export default DriverCard;