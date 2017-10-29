import React, { Component } from 'react';
import { disableDiv } from '../../Helpers/ux';
import { createTravel } from '../../Helpers/requests';
import { Redirect } from 'react-router-dom'

class TravelForm extends Component{
    constructor(props) {
        super(props);
        //All the required fields
        this.state = {
          start_location: '',
          end_location: '',
          price: 0,
          driver_id: 0,
          redirect: false,
          travel_id: 0
        };
        
        //Change and submit events
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }
      
      handleSubmit(event) {

        //create a travel record THEN disable form-travel
        if(localStorage['current_driver_id'] != null){
          createTravel(
            this.state.start_location, 
            this.state.end_location,
            this.state.price,
            localStorage['current_driver_id'],
            (data) => {
              this.setState({
                'redirect': true,
                'travel_id': data.id
              });
             
            }
          );
        } else{
          alert('You must create a driver before.');
        }
        
        event.preventDefault();
      }
    
      render() {
        const { redirect } = this.state;
        if(redirect){
          //Redirect after travel creation
          return <Redirect to={"/travel?id=" +this.state.travel_id}/>
        }
        return (
          <div className={((localStorage['current_driver_id'] != null) ? 'active' : 'inactive')}>
            <h2 id="travel-driver"> WRITING AS: {localStorage['current_driver_name']}</h2>
            <form id="form-travel" onSubmit={this.handleSubmit}>
              <label>
                Start location:
                <input type="text" name="start_location" value={this.state.start_location} onChange={this.handleChange} />
              </label>
              <label>
                End location:
                <input type="text" name="end_location" value={this.state.end_location} onChange={this.handleChange} />
              </label>
              <label>
                Price:
                <input type="text" name="price" value={this.state.price} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        );
      }
}

export default TravelForm;