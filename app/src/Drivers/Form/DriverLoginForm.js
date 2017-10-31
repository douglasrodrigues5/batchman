import React, { Component } from 'react';
import { loginDriver } from '../../Helpers/requests';
import { setElementText, enableDiv, disableDiv } from '../../Helpers/ux';

class DriverLoginForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
          cpf: '',
          current_driver:localStorage['current_driver_name'] 
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();

        loginDriver(this.state.cpf, (data) => {
          if(data[0].id !== null && data[0].name !== "undefined"){
            localStorage['current_driver_id'] = data[0].id;
            localStorage['current_driver_name'] = data[0].name;
            this.setState({
              'current_driver': data[0].name
            });

            enableDiv('form-travel');
            disableDiv('form-driver');
            setElementText("current_driver", this.state.current_driver);
          } else{
            alert("cpf invalido.");
          }
          
          
        });

      }
    
      render() {
        return (
          <div>
            <h1> LOGIN </h1>
            <form method="POST" onSubmit={this.handleSubmit}>
              <label>
                Driver cpf:
                <input type="text" name="cpf" value={this.state.cpf} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        );
      }
}

export default DriverLoginForm;