import React, { Component } from 'react';
import './App.css';
import Main from './containers/Main'; 
import { connect } from 'react-redux'; 

class App extends Component() {

  componentDidMount() {
    this.props.loggedIn() 
  }

  render() {
    return (
        this.props.loggedIn ? <LoggedInHomePage loggedInUser={this.props.loggedIn} /> : <generalHomePage/> 
    );
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
