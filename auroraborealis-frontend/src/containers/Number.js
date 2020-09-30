import React, { Component } from 'react'; 
import './../App.css';

class Number extends Component{

    state = {
        count: 0
    }
     
    increment = () => {
        const updatedCount = this.state.count + 1
        this.setState({
          count: updatedCount
        })
      }

    deduction = () => {
        const updatedCount = this.state.count - 1
        this.setState({
            count: updatedCount
        })
    }

    render(){
        return(
            <div>
                <button className="CounterButton" onClick={this.increment}> 
                    Click Me Increase!!
                </button>
                <button className="CounterButton" onClick={this.deduction} >
                    Click Me Decrease!!
                </button>
                <div className="Number" >
                    {this.state.count}
                </div>
            </div>
        )
    }


}

export default Number