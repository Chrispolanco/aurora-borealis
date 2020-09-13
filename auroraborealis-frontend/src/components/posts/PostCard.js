import React, { Component } from 'react';

class PostCard extends Component {

    render() {
        const { post } = this.props; 
        const date = new Date(post.created_at).toLocaleDateString()
        return( 
            <div className="postCard"> 
                <ul>
                    <h1>Date Submitted:</h1>
                    {date}
                    <h6>User ID:</h6>
                    {post.user_id}
                    <h6>Description:</h6>
                    {post.description}
                    <h6>Date:</h6>
                    {post.date}
                    <h6>Votes:</h6>
                    {post.votes}
                    <h6>Image:</h6>
                    {post.image} 
                    <h6>Latitude:</h6>
                    {post.latitude} 
                    <h6>Longitude:</h6>
                    {post.longitude}
                </ul> 
                <h6>Comments:</h6>
                    {/* {post.comments.map(comment =>
                        <h4> {comment.context}</h4> )} */}
                    {post.comments.map(comment =>
                        <Comment comment={comment} key={commment.id}/>)}
            </div>
        )
    }
}; 



export default PostCard; 