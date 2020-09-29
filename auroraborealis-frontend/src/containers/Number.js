import React, { Component } from 'react'; 
import './../App.css';

class Number extends React.Component{
    
    render(){
        return(
            <div>
                <div className="CounterButton">
                    Click Me!
                </div>
                <div className="Number">
                    10
                </div>
            </div>
        )
    }


}

export default Number