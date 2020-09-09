import React, { Component } from 'react';
import './App.css';
// import PostContainer from './containers/PostContainer'; 
import { getCurrentUser } from './actions/user'; 
import { connect } from 'react-redux';
import Login from './components/user/Login'; 

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
}

  render() {
    const { userLoggedIn } = this.props
    return(
      <div className="App"> 
        {userLoggedIn ? "Logged In" : <Login/>}
      </div>
    )
  }
}; 

const mapStateToProps = state => {
  return({
    userLoggedIn: !!state.currentUser
  })
}


export default connect(mapStateToProps, {getCurrentUser})(App); 