import React, { Component } from 'react';
import { travelSearch} from '../Helpers/requests';
import TravelsList from '../Travels/List/TravelsList';

class Search extends Component{

    constructor(props){
        super(props);

        this.state = {
            travels: null
        };

        travelSearch(
            this.props.start_location,
            this.props.end_location,
            this.props.price, 
            (data) => {
                this.setState({
                    'travels': data
                });
            });
    }
    render(){
        
        return(
            <div id="search">
                { this.state && this.state.travels &&
                    <TravelsList listSrc={this.state.travels} />
                 }
            </div>
            
        );
    }
}

export default Search;