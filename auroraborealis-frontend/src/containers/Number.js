import React, { Component } from 'react'; 
import './../App.css';

class Number extends Component{

    constructor() {
        super()
        this.state = {
          count: 0
        }
    }
     
    increment = () => {
        const newCount = this.state.count + 1
        this.setState({
          count: newCount
        })
      }

    deduction = () => {
        const newCount = this.state.count - 1
        this.setState({
            count: newCount
        })
    }

    render(){
        return(
            <div>
                <div className="CounterButton" onClick={this.increment}>
                    Click Me Increase!!
                </div>
                <div className="CounterButton" onClick={this.deduction}>
                    Click Me Decrease!!
                </div>
                <div className="Number" >
                    {this.state.count}
                </div>
            </div>
        )
    }


}

export default Number