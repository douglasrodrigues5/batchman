import React, { Component } from 'react';
import { editDriver } from '../../Helpers/requests';

class EditForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            status: localStorage['current_driver_status']
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        localStorage['current_driver_status'] = event.target.value;
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event){
        editDriver(
            localStorage['current_driver_id'],
            localStorage['current_driver_name'],
            localStorage['current_driver_birthdate'],
            localStorage['current_driver_cpf'],
            localStorage['current_driver_carmodel'],
            localStorage['current_driver_status'],
            localStorage['current_driver_sex'],
            (data) => {
                window.location.reload();
            }
        );
        event.preventDefault();
    }
    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <select 
                    id="status-select"
                    name="status" 
                    onChange={this.handleChange} 
                    value={localStorage['current_driver_status']}>
                        <option value={true}>Active driver</option>
                        <option value={false}>Inactive driver</option>
                    </select> 
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
        );
        
    }
}

export default EditForm;