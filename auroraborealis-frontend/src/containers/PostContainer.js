import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import Posts from '../components/posts/Posts'; 
import { fetchPosts } from './../actions/posts'; 
import { fetchComments } from './../actions/comments'; 

class PostContainer extends React.PureComponent {

    componentDidMount() {
        this.props.fetchPosts()
        this.props.fetchComments()
    }
    
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
export default connect(mapStateToProps, { fetchPosts, fetchComments} )(PostContainer)