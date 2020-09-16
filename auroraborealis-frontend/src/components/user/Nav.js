import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { NavLink } from 'react-router-dom'; 
import Logout from './Logout'; 
import { Route, Switch } from 'react-router-dom';
import PostContainer from '../../containers/PostContainer'
import PersonalPostContainer from '../../containers/PersonalPostContainer';

const Nav = ({ userLoggedIn }) => {

    return(
        <div className="NavBar"> 
            <NavLink to="/posts"><h1> All Posts </h1></NavLink>
            <NavLink to="/personalPosts"><h1> Personal Posts </h1></NavLink>
            <NavLink to="/createPost"><h1> Create Posts </h1></NavLink>
            <NavLink to="/logout"><h1> Logout </h1></NavLink>
            <Switch> 
                <Route exact path="/posts" component={ PostContainer } /> 
                <Route exact path="/personalPosts" component={ PersonalPostContainer} />
                <Route exact path="/createPost" component={ PersonalPostContainer} />
                <Route exact path="/logout" component={ Logout} />
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