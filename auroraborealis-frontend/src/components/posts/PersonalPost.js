import React, { Component } from 'react'; 

const PersonalPost = ({ post }) => {
    return(
        <div className="Personal_Post" key={post.id} > 
            {post.description}
        </div>
    )
}

export default PersonalPost