import React, { Component } from 'react';
import './App.css';
import { getCurrentUser } from './actions/user'; 
import { connect } from 'react-redux';
import Login from './components/user/Login'; 
import SignUp from './components/user/SignUp'; 
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import Logout from './components/user/Logout'; 
import Posts from './components/posts/Posts'; 


class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
}

  render() {
    return(
      <div className="App"> 
        {this.props.userLoggedIn ? "Logged In" : <SignUp/>}
        {this.props.userLoggedIn ? <Logout/> : ""}
        {/* <NavLink to="/posts">Posts</NavLink>
        <Switch> 
          <Route exact path='/posts' component={Posts}/>
        </Switch> */}
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