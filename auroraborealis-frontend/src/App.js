import React, { Component } from 'react';
import './App.css';
import PostContainer from './containers/PostContainer'; 
import { currentUser } from './actions/user'; 
import { setCurrentUser } from './actions/user'; 
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.currentUser()
}

  render() {
    return(
      <div className="App"> 
        <PostContainer/>
      </div>
    )
  }
}; 



export default connect(null, {currentUser, setCurrentUser})(App); 