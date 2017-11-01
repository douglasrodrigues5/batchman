import React, { Component } from 'react';

class Welcome extends Component{
    render(){
        return(
            <div>
                <a href="/drivers"> <h1> I AM A DRIVER </h1> </a>
                <br />
                <br />
                <a href="/passengers"><h1> I AM A PASSENGER </h1></a>
            </div>

        );
    }
}

export default Welcome;