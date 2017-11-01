import React, { Component } from 'react';

class PassengersList extends Component{

    render(){
        return(
            <div className="passenger-list">
                <table className="passengers-table">
                    <tbody>
                        <tr>
                            <th> Passengers </th>
                            <th> Paid </th>
                        </tr>
                        {this.props.listSrc.map((passenger, index) => (
                            <tr key={index}>
                                <td>{passenger.name}</td>
                                <td>{passenger.money_balance}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
               
            </div>
        );
    }
}

export default PassengersList;