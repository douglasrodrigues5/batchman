import React, { Component } from 'react';
import { getUrlParam } from '../Helpers/ux';
import { getTravelPassengers, getTravel, getDriver } from '../Helpers/requests';
import PassengerForm from '../Passengers/Form/PassengerForm';
import PassengersList from '../Passengers/List/PassengersList';

class Travel extends Component{
    constructor(props) {
        super(props);
        //All the required fields
        this.state = {
            travel_id: null,
            start_location: '',
            end_location: '',
            price: 0,
            max_lotation: 2,
            driver_name: '',
            passengers: null
        };
        
        getTravel(getUrlParam('id'), (data) => {
            getDriver(data.driver_id, (driver_data) => {
                this.setState({
                    'travel_id': data.id,
                    'start_location': data.start_location,
                    'end_location': data.end_location,
                    'price': data.price,
                    'max_lotation': data.max_lotation,
                    'driver_name': driver_data.name
                });
            });
            
            getTravelPassengers(data.id, (passengers) => {
                this.setState({
                    'passengers': passengers
                });
                
            });
        });


      }
    render(){
        return(
           <div> 
                <h1> Travel info</h1>
                
                <h2> Start location: {this.state.start_location} </h2>
                <h2> End location: {this.state.end_location} </h2>
                <h3> Min price: {this.state.price} </h3>
                <h3> Max lotation: {this.state.max_lotation}</h3>
                <h3> Driver: {this.state.driver_name} </h3>
                { this.state && this.state.travel_id && this.state.passengers && 
                    <div>
                        <PassengerForm 
                            price={this.state.price}
                            travel_lotation={this.state.max_lotation} 
                            passengers={this.state.passengers} 
                            travel_id={this.state.travel_id} 
                        /> 
                        <PassengersList listSrc={this.state.passengers} />
                    </div>
                }
                
                
                
            </div>
        );
    }
}

export default Travel;