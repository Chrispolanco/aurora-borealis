import React, { Component } from 'react'; 
import Signup from '.components/Signup'; 
import { connect } from 'react-redux';

class Homepage extends Component {
    render() {
        return (
            <div> 
                <Signup addUser={this.props.addUser} /> 
            </div>
        )
    }
}

    const mapDispatchToProps = (dispatch) => ({
        addUser: (user) => dispatch({ type: 'ADD_USER', user})
    })

export default connect(null, mapDispatchToProps)(Homepage); 