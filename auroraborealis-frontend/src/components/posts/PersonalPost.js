import React, { Component } from 'react'; 
import CommentCard from '../comments/commentCard'

const PersonalPost = ({ post }) => {
    const date = new Date(post.created_at).toLocaleDateString()
    return(
        <div className="Personal_Post" key={post.id} > 
            <p>Date Submitted:{date}</p>
            <p>User ID:{post.user_id} </p>
            <p>Description:{post.description}</p>
            <p>Comments:</p>
            {post.comments.map(comment =>
                <CommentCard comment={comment} key={comment.id}/>)}
            <p>Add Comment:</p>
        </div>
    )
}

export default PersonalPost