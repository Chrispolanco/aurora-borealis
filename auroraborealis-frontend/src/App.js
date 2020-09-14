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


class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchPosts()
}

  render() {
    // const { userLoggedIn, posts} = this.props
    return(
      <div className="App"> 
        {this.props.userLoggedIn ? <Logout/> : <Login/>}
        <br></br>
        <br></br>
        {this.props.userLoggedIn ? <Logout/> : <SignUp/>}
        <NavLink to="/posts"><h1> All Posts</h1></NavLink>
        <NavLink to="/personalPosts"><h1> Personal Posts </h1></NavLink>
        <NavLink to="/createPost"><h1>Create Post</h1></NavLink>
        <Switch> 
          <Route exact path="/posts" component={ PostContainer } /> 
          <Route exact path="/personalPosts" component={ PersonalPostContainer} />
          <Route exact path="/createPost" component={ PersonalPostContainer} />
        </Switch>
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