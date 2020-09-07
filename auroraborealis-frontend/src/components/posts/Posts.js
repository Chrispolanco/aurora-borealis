import React, { Component } from 'react'; 

class Posts extends Component {
    render() {
        const { posts, userId, deletePost } = this.props; 
        const userPost = posts.filter ((user) => user.userId === userId)

        const postArray = userPost.map((user) => {
            return <Post key={user.id} post={user} deletePost={deletePost} /> 
        }); 
    return <ul>{postArray}</ul>
    }

}

export default Posts