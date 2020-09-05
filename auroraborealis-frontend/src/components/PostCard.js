import React, { Component } from 'react'; 

class PostCard extends Component {

    handleClick = () => {
        this.props.deletePost(this.props.post.id)
    }

    render() {
        return( 
            <div> 
                <li> 
                    {this.props.post.description}
                    <button onClick={this.handleClick}>Delete</button>
                </li>
            </div>
        )
    }
}; 


export default PostCard; 