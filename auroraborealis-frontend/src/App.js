import React, { Component } from 'react';
import './App.css';
import { getCurrentUser } from './actions/user'; 
import { fetchPosts } from './actions/posts'; 
import { connect } from 'react-redux';
import Login from './components/user/Login'; 
import SignUp from './components/user/SignUp'; 
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import Logout from './components/user/Logout'; 
import PostContainer from './containers/PostContainer'


class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchPosts()
}

  render() {
    const { userLoggedIn, posts } = this.props
    return(
      <div className="App"> 
        {this.props.userLoggedIn ? "Logged In" : <Login/>}
        {this.props.userLoggedIn ? <Logout/> : ""}
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/posts"><h1> All Posts Created</h1></NavLink>
        <Switch> 
          <Route exact path='/posts' component={ PostContainer } /> 
        </Switch>
      </div>
    )
  }
}; 

const mapStateToProps = state => {
  return({
    userLoggedIn: !!state.currentUserReducer, 
    posts: state.postReducer
  })
}


export default connect(mapStateToProps, {getCurrentUser, fetchPosts})(App); 