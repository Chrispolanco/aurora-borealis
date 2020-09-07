import React, { Component } from 'react'; 
import PostCard from '../posts/PostCard'; 

// import React from 'react'; 
// import importedPosts from '../actions/posts/posts'; 

class Posts extends Component {
    render() {
        const { posts, userId, deletePost } = this.props; 
        const userPost = posts.filter((user) => user.userId === userId)

        const postArray = userPost.map((user) => {
            return <PostCard key={user.id} post={user} deletePost={deletePost} /> 
        }); 
    return <ul>{postArray}</ul>
    }

}

export default Posts

// const importedPosts = ({ posts }) => {
//     const postsList = posts.map(post => {
//         return <Post key={post.key} post={post} /> 
//     })

//     return( 
//         <div>
//             {postsList.description}
//         </div>
//     )
// }

// export default Posts