import React from 'react'; 
import PersonalPost from './PersonalPost';  

const PersonalPosts = ({ posts, userLoggedIn, deletePost, history }) => {

    const personalPosts = posts.filter(post => 
        post.user_id === userLoggedIn.id)

    const personalPost = personalPosts.map(post => {
        return <PersonalPost key={post.id} post={post} userLoggedIn={userLoggedIn} deletePost={deletePost} history={history} />
    })

    return(
        <div>
            {personalPost.sort((a, b) => (a.created_at > b.created_at) ? 1 : -1)}
        </div>
    )
}

export default PersonalPosts; 