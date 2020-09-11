import React from 'react'; 
import PostCard from '../posts/PostCard'

const Posts = ({ posts }) => {
    const postList = posts.map(post => {
        return <PostCard key={post.id} post={post} /> 
    })
}


export default Posts 

// import React, { Component } from 'react'; 
// import PostCard from '../posts/PostCard'; 

// import React from 'react'; 
// import importedPosts from '../actions/posts/posts'; 

// class Posts extends Component {
//     render() {
//         const { posts, userId, deletePost } = this.props; 
//         const userPost = posts.filter((user) => user.userId === userId)

//         const postArray = userPost.map((user) => {
//             return <PostCard key={user.id} post={user} deletePost={deletePost} /> 
//         }); 
//     return <ul>{postArray}</ul>
//     }

// }

// export default Posts