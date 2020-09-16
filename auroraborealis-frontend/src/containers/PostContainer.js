import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import Posts from '../components/posts/Posts'; 
import { deletePost } from '../actions/posts'; 

class PostContainer extends Component {


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
        posts: state.postReducer
    })
}
export default connect(mapStateToProps, { deletePost })(PostContainer)