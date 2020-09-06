import React, { Component } from 'react';
import './App.css';
import Main from './containers/Main'; 
import { connect } from 'react-redux'; 

class App extends Component {
  render() {
    return(
      <div className="App"> 
        <Main/>
      </div>
    )
  }

}