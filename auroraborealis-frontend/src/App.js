import React, { Component } from 'react';
import './App.css';
import { getCurrentUser } from './actions/user'; 
import { connect } from 'react-redux';
import Login from './components/user/Login'; 
import SignUp from './components/user/SignUp'; 
import { Router, Route, Switch, Link } from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
}

  render() {
    return(
      <div className="App"> 

        {this.props.userLoggedIn ? "Logged In" : <SignUp/>}

      </div>
    )
  }
}; 

const mapStateToProps = state => {
  return({
    userLoggedIn: !!state.currentUserReducer
  })
}


export default connect((mapStateToProps), {getCurrentUser})(App); 