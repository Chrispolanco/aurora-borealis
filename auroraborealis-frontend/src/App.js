import React, { Component } from 'react';
import './App.css';
// import PostContainer from './containers/PostContainer'; 
import { currentUser } from './actions/user'; 
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.currentUser()
}

  render() {
    const { userLoggedIn } = this.props
    return(
      <div className="App"> 
        {userLoggedIn ? "Logged In" : "Not Logged In"}
      </div>
    )
  }
}; 

const mapStateToProps = state => {
  return({
    userLoggedIn: !!state.currentUser
  })
}


export default connect(mapStateToProps, {currentUser})(App); 