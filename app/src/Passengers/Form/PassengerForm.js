import React, { Component } from 'react';
import { createPassenger } from '../../Helpers/requests';

class PassengerForm extends Component{
    constructor(props) {
        super(props);
        //All the required fields
        this.state = {
          name: '',
          birthdate: '',
          cpf: '',
          sex: 'male',
          money_balance: 0,
          travel_id: this.props.travel_id
        };

        
        //Change and submit events
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }
      
      handleSubmit(event) {

        //create a passenger record
        createPassenger(
          this.state.name, 
          this.state.birthdate,
          this.state.cpf,
          this.state.sex,
          this.state.money_balance,
          this.state.travel_id
        );
        event.preventDefault();
      }
    
      render() {
        return (
          <div>
            <h1> Register a passenger for this travel </h1>
            <form id="form-passenger" onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            </label>
            <label>
              Birthdate:
              <input type="date" name="birthdate" value={this.state.birthdate} onChange={this.handleChange} />
            </label>
            <label>
              Cpf:
              <input type="text" name="cpf" value={this.state.cpf} onChange={this.handleChange} />
            </label>
            <select name="sex" onChange={this.handleChange} value={this.state.sex}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <label>
              How much you can pay?:
              <input type="text" name="money_balance" value={this.state.money_balance} onChange={this.handleChange} />
            </label>
            
            <input type="submit" value="Submit" />
          </form>
          </div>
          
        );
      }
}

export default PassengerForm;