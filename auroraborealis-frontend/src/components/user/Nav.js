import React from 'react';
import { connect } from 'react-redux'; 
import Logout from './Logout'; 
import Login from './Login'; 
import SignUp from './SignUp'; 
import { Route, Switch, NavLink } from 'react-router-dom';
import PostContainer from '../../containers/PostContainer'
import PersonalPostContainer from '../../containers/PersonalPostContainer';
import CreatePostContainer from '../../containers/CreatePostContainer';
import '../../App.css';

const Nav = ({ userLoggedIn }) => {

    return(
        userLoggedIn ?
        <div className="navigation"> 
            <NavLink to="/posts" activeStyle={{color: 'gold'}}><p> All Posts </p></NavLink>
            <NavLink to="/personalPosts" activeStyle={{color: 'gold'}}><p> Personal Posts </p></NavLink>
            <NavLink to="/createPost" activeStyle={{color: 'gold'}}><p> Create Posts </p></NavLink>
            <NavLink to="/logout" activeStyle={{color: 'gold'}}><p> Logout </p></NavLink>
            <Switch> 
                <Route exact path="/posts" component={ PostContainer } /> 
                <Route exact path="/personalPosts" component={ PersonalPostContainer} />
                <Route exact path="/createPost" component={ CreatePostContainer} />
                <Route exact path="/logout" component={ Logout} />
            </Switch> 
        </div>
        : 
        <div className="navigation"> 
            <NavLink to="/login" activeStyle={{color: 'gold'}}><p> Login </p></NavLink>
            <NavLink to="/signup" activeStyle={{color: 'gold'}}><p> Sign Up </p></NavLink>
            <Switch> 
                <Route exact path="/login" component={ Login } />
                <Route exact path="/signup" component={ SignUp } />
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