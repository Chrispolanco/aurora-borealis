import React, { Component } from 'react'; 
import CommentCard from '../comments/CommentCard'
import CommentForm from '../comments/CommentForm'

const PersonalPost = ({ post, userLoggedIn }) => {
    const date = new Date(post.created_at).toLocaleDateString()
    return(
        <div className="PersonalPostContainer" key={post.id} > 
            {/* <p>Votes: {post.votes}</p> */}
            <p>Date Submitted: {date}</p>
            <p>Location: {post.location}</p>
            <h4>Story</h4>
            <div className="story">{post.story}</div>
            <p>Comments:</p>
                {post.comments.map(comment =>
                <CommentCard comment={comment} key={comment.id}/>)}
            <CommentForm post={post} userLoggedIn={userLoggedIn} /> 
        </div>
    )
}

export default PersonalPost