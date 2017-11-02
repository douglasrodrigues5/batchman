import React, { Component } from 'react';
import { setElementText, enableDiv, disableDiv } from '../../Helpers/ux';
import { createDriver } from '../../Helpers/requests';


class DriverForm extends Component{
    constructor(props) {
        super(props);
        //All the required fields
        this.state = {
          name: '',
          birthdate: '',
          cpf: '',
          carmodel: '',
          status: true,
          sex: 'male',
          current_driver_id: localStorage['current_driver_id'] !== undefined ? 'inactive' : 'active'
        };

        
        //Change and submit events
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }
      
      handleSubmit(event) {

        //create a driver record THEN disable form-driver
        createDriver(
          this.state.name, 
          this.state.birthdate,
          this.state.cpf,
          this.state.carmodel,
          this.state.status,
          this.state.sex, 
          (data) => {
            //Saving data for posterior use.
            localStorage['current_driver_id'] = data.id;
            localStorage['current_driver_name'] = data.name;
            localStorage['current_driver_birthdate'] = data.birthdate
            localStorage['current_driver_cpf'] = data.cpf
            localStorage['current_driver_carmodel'] = data.carmodel
            localStorage['current_driver_status'] = data.status
            localStorage['current_driver_sex'] = data.sex
            enableDiv('form-travel');
            disableDiv('form-driver');
            setElementText("current_driver", data.name);
            setElementText("driver_status", "Status: "+(localStorage['current_driver_status'] !== "false" ? "active":"inactive" ) );
          }
        );
        event.preventDefault();
      }
    
      render() {
        return (
          <div id="form-driver" className={this.state.current_driver_id}>
            <h1> Register a new driver </h1>
            <form onSubmit={this.handleSubmit}>
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
            <label>
              Car model:
              <input type="text" name="carmodel" value={this.state.carmodel} onChange={this.handleChange} />
            </label>
            <select name="status" onChange={this.handleChange} value={this.state.status}>
              <option value={true}>Active driver</option>
              <option value={false}>Inactive driver</option>
            </select> 
            <select name="sex" onChange={this.handleChange} value={this.state.sex}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input type="submit" value="Submit" />
          </form>
          </div>
          
        );
      }
}

export default DriverForm;