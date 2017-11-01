import React, { Component } from 'react';
import { disableDiv } from '../Helpers/ux';
import Search from '../Search/Search';

class Passenger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start_location: '',
            end_location: '',
            price: '',
            ready: false};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }
    
      handleSubmit(event) {
        this.setState({
            'ready': true
        });
        disableDiv('search-form');
        event.preventDefault();
      }
    
    render(){
        return(
            <div className="Passenger">
                <h1> Hello, Passenger. </h1>
                <form id="search-form" onSubmit={this.handleSubmit}>
                    <label>
                        Start location:
                    <input name="start_location" type="text" value={this.state.start_location} onChange={this.handleChange} />
                    </label>
                    <label>
                        End location:
                    <input name="end_location" type="text" value={this.state.end_location} onChange={this.handleChange} />
                    </label>
                    <label>
                        Max price:
                    <input name="price" type="text" value={this.state.price} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                
                {this.state && this.state.ready &&
                    <Search 
                        start_location={this.state.start_location}
                        end_location={this.state.end_location}
                        price={this.state} />
                }
            </div>
        );
    }
}

export default Passenger;