import React, { Component } from 'react';
import CommentCard from '../comments/CommentCard'; 
import CommentForm from '../comments/CommentForm'

const PostCard = ({ post, userLoggedIn }) => {
    const date = new Date(post.created_at).toLocaleDateString()
    return( 
        <div className="postCardContainer"> 
                <li>Date Submitted:</li>
                {date}
                <li>Story:</li>
                {post.story}
                <li>Location:</li>
                {post.location}
                <li>Votes:</li>
                {post.votes}
            <p>Comments:</p>
                {post.comments.map(comment =>
                <CommentCard comment={comment} key={comment.id}/>)}
            <p>Comments:</p>
                <CommentForm post={post} userLoggedIn={userLoggedIn} />  
        </div>
    )
}


export default PostCard; 