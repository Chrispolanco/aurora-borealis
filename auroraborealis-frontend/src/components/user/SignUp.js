import React, { Component } from 'react' 

class SignUp extends Component {

    state = {
        username: '',
        password: ''
    }

    handleChange = (event) => {
        this,setState({
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
                    <input type='text' onChange={ this.handleChange } value={this.state.username}/> 
                    <br/> 
                    <inpute type='password' onChange={this.handleChange} value={this.state.password}/> 
                </form>
            </div> 
        )
    }

}

export default SignUp; 