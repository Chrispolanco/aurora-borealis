import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import PostForm from '../components/posts/PostForm'; 
import PostCard from '../components/posts/PostCard'; 

class PostsContainer extends Component {

    render() {
        return(
            <div>
                <PostForm addPost={this.props.addPost} userId={this.props.user.id} /> 
                <PostCard posts={this.props.posts} userId = {this.props.user.id} deletePost={this.props.deletePosts} /> 
                ))    
            </div> 
        )
    }

}

const mapStateToProps = ( posts ) => ({ posts })


const mapDispatchToProps = dispatch => ({
    addPost: post => dispatch({ type: "ADD_POST", post }), 
    deletePost: (id) => dispatch({ type: "DELETE_POST", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)