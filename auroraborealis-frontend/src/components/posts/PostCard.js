import React, { Component } from 'react';

class PostCard extends Component {

    handleClick = (e) => {
        this.props.deletePost(this.props.post.id)
    }

    render() {
        const { post } = this.props; 
        return( 
            <div> 
                <li> {post}</li>
                <button onClick={this.handleClick}>Delete</button>
            </div>
        )
    }
}; 


export default PostCard; 