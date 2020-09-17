import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { login } from '../../actions/user'; 

class Login extends Component {
    state = {
        username: "", 
        password: ""
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state)

        this.setState({
            username: "", 
            password: ""
        })
    }

    render() {
        return(
            <div className="LoginForm"> 
                <form onSubmit= {this.handleOnSubmit}> 
                    <label htmlFor="username"> Username: </label>
                    <br/> 
                    <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange} placeholder="Username" />
                    <br/> 
                    <label htmlFor="password"> Password: </label>
                    <br/> 
                    <input type="password" name="password" value={this.state.password} onChange={this.handleOnChange} placeholder="Password" /> 
                    <br/>
                    <input type="submit" value="Log In" /> 
                </form>
            </div> 
        )
    }
}

export default connect (null, { login })(Login)