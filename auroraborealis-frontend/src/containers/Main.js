import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import Login from '../components/Login'; 
import {loginUser} from '../actions/userActions'

class Main extends Component {

    render() {
        return (
            <div> 
                <Login loginUser={this.props.loginUser}/> 
            </div>
        )
    }
}

export default connect(null, {loginUser})(Main)