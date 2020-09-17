import React from 'react'; 
import PostCard from '../posts/PostCard'

const Posts = ( {posts, userLoggedIn} ) => {

    const allPosts = posts.map(post => {
        return <PostCard key={post.id} post={post} userLoggedIn={userLoggedIn} />
    })

    return(
        <div>
            {allPosts}
        </div>
    )
}


export default Posts
