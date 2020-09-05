import React, { Component } from 'react'; 

const PostCard = props => {
    return( 
        <div> 
            <span> 
                {props.description}
            </span>
            <button>
                Delete
            </button>
        </div>
    )
}

export default PostCard; 