import React from 'react'; 
import PostCard from '../posts/PostCard'

const Posts = ( props ) => {
    return (
        <ul>
            {props.posts.map(post => <PostCard post={post} key={post.id}/> )}
        </ul>
    )
}


export default Posts
