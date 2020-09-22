import React from 'react'; 
import PostCard from '../posts/PostCard'

const Posts = ( {posts, userLoggedIn} ) => {

    const allPosts = posts.map(post => {
        return <PostCard key={post.id} post={post} userLoggedIn={userLoggedIn} />
    })

    return(
        <div>
            {allPosts.sort((a, b) => (a.created_at > b.created_at) ? 1 : -1)}
        </div>
    )
}


export default Posts
