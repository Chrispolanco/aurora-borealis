import React from 'react'; 
import CommentCard from './CommentCard'
import CommentForm from './CommentForm'

const PersonalPost = ({ post, userLoggedIn, deletePost, history }) => {

    const date = new Date(post.created_at).toLocaleDateString()
    const filteredComment = post.comments.filter(comment => 
        comment.context.length > 0)
    const sortedComments = filteredComment.map(comment => {
    return <CommentCard comment={comment} key={comment.id}/>})

    return(
        <div className="PersonalPostContainer" key={post.id} > 
            {/* <p>Votes: {post.votes}</p> */}

            {/* <button onClick={() => deletePost(post.id, history)}>DELETE</button> */}
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

export default PersonalPost

// {post.comments.map(comment =>
//     <CommentCard comment={comment} key={comment.id}/>)}