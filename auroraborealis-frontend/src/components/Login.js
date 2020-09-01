import React, { Component } from 'react'; 

class Login extends Component {
    state = {
        email: "", 
        password: ""
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        //add action 

        this.setState({
            email: "", 
            password: ""
        })
    }

    render() {
        return(
            <div> 
                <form onSubmit= {this.handleOnSubmit}> 
                    <input type="email" name="email" value={this.state.email} onChange={handleOnChange} />
                    <input type="text" name="password" value={this.state.password} onChange={this.handleOnChange} /> 
                    <input type="submit" /> 
                </form>
            </div> 
        )
    }
}

export default Login 