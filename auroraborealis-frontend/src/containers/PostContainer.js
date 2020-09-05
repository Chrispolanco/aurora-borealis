import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import PostForm from './PostForm'; 
import Post from './Post'; 

class PostsContainer extends Component {

    render() {
        return(
            <div>
                <PostForm addPost={this.props.addPost} /> 
                {this.props.posts.map((post) => (
                    <PostCard deletePost={this.props.deletePost} key={post.id} post={post} /> 
                ))}    
            </div> 
        )
    }

}

const mapStateToProps =({ posts }) => ({ posts })

const mapDispatchToProps = dispatch => ({
    addPost: post => dispatch({ type: "ADD_POST", post }), 
    deletePost: (id) => dispatch({ type: "DELETE_POST", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)