import React, { Component } from 'react'; 

const PostCard = props => {
    return( 
        <div> 
            <span> 
                {props.description}
            </span>
            <button onClick={() => props.delete(props.post.id)}>
                Delete
            </button>
        </div>
    )
}

export default PostCard; 