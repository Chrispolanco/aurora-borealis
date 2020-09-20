import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { NavLink } from 'react-router-dom'; 
import Logout from './Logout'; 
import Login from './Login'; 
import { Route, Switch } from 'react-router-dom';
import PostContainer from '../../containers/PostContainer'
import PersonalPostContainer from '../../containers/PersonalPostContainer';
import CreatePostContainer from '../../containers/CreatePostContainer';
import '../../App.css';

const Nav = ({ userLoggedIn }) => {

    return(
        userLoggedIn ?
        <div className="navigation"> 
            <NavLink to="/posts"><p> All Posts </p></NavLink>
            <NavLink to="/personalPosts"><p> Personal Posts </p></NavLink>
            <NavLink to="/createPost"><p> Create Posts </p></NavLink>
            <NavLink to="/logout"><p> Logout </p></NavLink>
            <Switch> 
                <Route exact path="/posts" component={ PostContainer } /> 
                <Route exact path="/personalPosts" component={ PersonalPostContainer} />
                <Route exact path="/createPost" component={ CreatePostContainer} />
                <Route exact path="/logout" component={ Logout} />
            </Switch> 
        </div>
        : 

        <div className="navigation"> 
            <NavLink to="/login"><p> Login </p></NavLink>
            <Switch> 
                <Route exact path="/login" component={ Login } />
            </Switch>
        </div>
    )
}

const mapStateToProps = state => {
    return({
        userLoggedIn: !!state.currentUserReducer
    })
}

export default connect(mapStateToProps)(Nav)