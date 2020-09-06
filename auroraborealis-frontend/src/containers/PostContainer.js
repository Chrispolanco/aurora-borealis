import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import PostForm from './PostForm'; 
import PostCard from './PostCard'; 

class PostsContainer extends Component {

    render() {
        return(
            <div>
                <PostForm addPost={this.props.addPost} userId={this.props.user.id} /> 
                {this.props.posts.map((post) => (
                    <PostCard posts={this.props.posts} userId = {this.props.user.id} deletePost={this.props.deletePosts} /> 
                ))}    
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