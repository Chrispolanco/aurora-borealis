import React, { Component } from 'react'; 
import PersonalPost from './PersonalPost';  

const PersonalPosts = ({ posts, userLoggedIn }) => {

    const personalPosts = posts.filter(post => 
        post.user_id === userLoggedIn.id)

    const personalPost = personalPosts.map(post => {
        return <PersonalPost key={post.id} post={post} />
    })

    return(
        <div className="Personal_Posts">
            {personalPost}
        </div>
    )
}

export default PersonalPosts; 