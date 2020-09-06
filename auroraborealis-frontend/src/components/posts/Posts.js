import React, { Component } from 'react'; 

class Posts extends Component {
    render() {
        const { posts, userId, deletePost } = this.props; 
        const userPost = review.filter ((post) => post.userId === userId)

        const postArray = userPost.map((post) => {
            return <Post key={user.id} post={post} deletePost={deletePost} /> 
        }); 
    return <ul>{postArray}</ul>
    }

}

export default Posts