import React, { Component } from 'react';
import './App.css';
import Main from './containers/Main'; 
import { connect } from 'react-redux'; 

class App extends Component() {

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <Main /> 
      </div>
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
