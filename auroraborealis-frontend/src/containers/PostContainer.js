import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import Posts from '../components/posts/Posts'; 

class PostContainer extends React.PureComponent {


    render() {
        return(
            <div className="PostsContainer">
                <Posts posts={this.props.posts} userLoggedIn={this.props.userLoggedIn} /> 
            </div> 
        )
    }
}

const mapStateToProps = state => {
    return({
        userLoggedIn: state.currentUserReducer, 
        posts: state.postReducer, 
        comments: state.commentReducer
    })
}
export default connect(mapStateToProps)(PostContainer)