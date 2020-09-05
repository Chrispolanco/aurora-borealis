import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 

class Posts extends Component {

    handleRemovePost = (event, postId, userId) => {
        event.precentDefault()
        this.props.dispatch(removePost(postId, userId))
    }

    handleAddPost = () => {
        event.preventDefault()
        this.props.dispatch()
    }

    renderPosts = () => {
        return this.props.posts.map(post => <PostCard delete={this.props.delete} key ={post.id} post={post} />)  
    }

}