import React, { Component } from 'react' 

class SignUp extends Component {

    state = {
        username: '',
        password: '', 
        email: '', 
        first_name: '', 
        last_name: ''
    }

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault(); 
        this.props.addUser(this.state); 
        this.setState({
            username: '', 
            password: ''
        })
    }

    render() {
        return(
            <div className="form">
                <form onSubmit = { this.handleSubmit }> 
                    <label htmlFor="username"> Username: </label>
                    <br/> 
                    <input type="text" name="username" value={this.state.username} onChange={this.handleOnChange} placeholder="Username" />
                    <br/> 
                    <label htmlFor="password"> Password: </label>
                    <br/> 
                    <input type="password" name="password" value={this.state.password} onChange={this.handleOnChange} placeholder="Password" /> 
                    <br/>
                    <label htmlFor="email"> Email: </label>
                    <br/> 
                    <input type="email" name="email" value={this.state.email} onChange={this.handleOnChange} placeholder="Email" />
                    <br/> 
                    <label htmlFor="first_name"> First Name: </label>
                    <br/> 
                    <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleOnChange} placeholder="First Name" /> 
                    <br/>
                    <label htmlFor="last_name"> Last Name: </label>
                    <br/> 
                    <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleOnChange} placeholder="Last Name" /> 
                </form>
            </div> 
        )
    }

}


export default SignUp; 

