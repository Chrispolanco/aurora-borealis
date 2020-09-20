import React, { Component } from 'react';
import './App.css';
import { getCurrentUser } from './actions/user'; 
import { fetchPosts } from './actions/posts'; 
import { connect } from 'react-redux';
import Login from './components/user/Login'; 
import SignUp from './components/user/SignUp'; 
import { Route, Switch, NavLink } from 'react-router-dom';
import Logout from './components/user/Logout'; 
import PostContainer from './containers/PostContainer'
import PersonalPostContainer from './containers/PersonalPostContainer';
import PostForm from './components/posts/PostForm'; 
import Nav from './components/user/Nav'; 


class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchPosts()
}

  render() {
    return(
      <div> 
        <Nav/> 
      </div>
    )
  }
}; 

const mapStateToProps = state => {
  return({
    userLoggedIn: !!state.currentUserReducer
  })
}

export default connect(mapStateToProps, {getCurrentUser, fetchPosts})(App); 