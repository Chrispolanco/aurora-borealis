import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { login } from '../../actions/user'; 

class Login extends Component {
    state = {
        email: "", 
        password: ""
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.login({ email: this.state.email, password: this.state.password})

        this.setState({
            email: "", 
            password: ""
        })
    }

    render() {
        return(
            <div> 
                <form onSubmit= {this.handleOnSubmit}> 
                    <label htmlFor="email"> Email: </label>
                    <br/> 
                    <input type="email" name="email" value={this.state.email} onChange={this.handleOnChange} placeholder="Email" />
                    <br/> 
                    <label htmlFor="password"> Password: </label>
                    <br/> 
                    <input type="text" name="password" value={this.state.password} onChange={this.handleOnChange} placeholder="Password" /> 
                    <br/>
                    <input type="submit" /> 
                </form>
            </div> 
        )
    }
}

export default connect (null, { login })(Login)