import React, { Component } from 'react'; 

const PersonalPost = ({ post }) => {
    return(
        <div className="Personal_Post" key={post.id} > 
            <h1> {post.description} </h1>
        </div>
    )
}

export default PersonalPost