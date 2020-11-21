import React from 'react';
// import CommentCard from '../comments/CommentCard'; 
// import CommentForm from '../comments/CommentForm'

const PostCard = ({ post, userLoggedIn }) => {
    const date = new Date(post.created_at).toLocaleDateString()
    const filteredComment = post.comments.filter(comment => 
        comment.context.length > 0)
    const sortedComments = filteredComment.map(comment => {
    return <CommentCard comment={comment} key={comment.id}/>})

    return( 
        <div className="PostCardContainer" key={post.id}> 
            {/* <p>Votes: {post.votes}</p> */}
            <p>Date Submitted: {date}</p>
            <p>Location: {post.location}</p>
            <h4>Story</h4>
            <div className="story">{post.story}</div>
            <p>Comments:</p>
                {sortedComments.sort((a, b) => (a.created_at > b.created_at) ? 1 : -1)}
                <CommentForm post={post} userLoggedIn={userLoggedIn} /> 
        </div>
    )
}


export default PostCard; 


