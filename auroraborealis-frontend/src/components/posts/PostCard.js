import React, { Component } from 'react';
import CommentCard from '../comments/CommentCard'; 
import CommentForm from '../comments/CommentForm'

const PostCard = ({ post, userLoggedIn }) => {
    const date = new Date(post.created_at).toLocaleDateString()
    return( 
        <div className="postCard"> 
            <ul>
                <h1>Date Submitted:</h1>
                {date}
                <p>User ID:</p>
                {post.user_id}
                <p>Description:</p>
                {post.description}
                <p>Date:</p>
                {post.date}
                <p>Votes:</p>
                {post.votes}
                <p>Image:</p>
                {post.image} 
                <p>Latitude:</p>
                {post.latitude} 
                <p>Longitude:</p>
                {post.longitude}
            </ul> 
            <p>Comments:</p>
                {post.comments.map(comment =>
                <CommentCard comment={comment} key={comment.id}/>)}
            <p>Comments:</p>
                <CommentForm post={post} userLoggedIn={userLoggedIn} />  
        </div>
    )
}


export default PostCard; 