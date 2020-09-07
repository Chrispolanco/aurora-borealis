import React, { Component } from 'react';
import './App.css';
import PostContainer from './containers/PostContainer'; 

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

export default App