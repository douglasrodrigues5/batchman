import React, { Component } from 'react';

class TravelsList extends Component{

    render(){
        return(
            <div id="travels-list">
                <table>
                    <tbody>
                        <tr>
                            <th>Start location</th>
                            <th>End location</th>
                            <th>Price</th>
                            <th>Apply</th>
                        </tr>
                        
                        {this.props.listSrc.map((travel, index) => (
                            <tr key={index}>
                                <td>{travel.start_location}</td>
                                <td>{travel.end_location}</td>
                                <td>{travel.price}</td>
                                <td>
                                    <a href={"/travel?id=" + travel.id} >
                                        APPLY
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TravelsList;