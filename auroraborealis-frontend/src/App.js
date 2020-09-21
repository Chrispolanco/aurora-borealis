import React, { Component } from 'react';
import './App.css';
import { getCurrentUser } from './actions/user'; 
import { fetchPosts } from './actions/posts'; 
import { fetchComments } from './actions/comments'; 
import { connect } from 'react-redux';
import Nav from './components/user/Nav'; 

class App extends React.PureComponent {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchPosts()
    this.props.fetchComments()
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

export default connect(mapStateToProps, {getCurrentUser, fetchPosts, fetchComments})(App); 