export const getPosts = posts => {
    return {
        type: "GET_POSTS", 
        posts 
    }
}

export const addPost = post => {
    return {
        type: "ADD_POST", 
        post
    }
}

export const deletePostConnect = postId => {
    return {
        type: "DELETE_POST", 
        postId
    }
}

export const updatePost = post => {
    return {
        type: "UPDATE_POST", 
        post
    }
}

export const clearPosts = () => {
    return {
        type: "CLEAR_POSTS"
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        return fetch ("http://localhost:3000/posts", {
            credentials: "include", 
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(response => {
            if (response.error){
                alert(response.error)
            } else {
                dispatch(getPosts(posts))
                console.log(posts)
            }
        })
        .catch(console.log)
    }
}

export const deletePost = (postId) => {
    return (dispatch) => {
        return fetch("http://localhost:3000/posts"+`${postId}`, {
            credentials: "include", 
            method: "DELETE", 
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                    dispatch(deletePostConnect(postId))
                }
            })
            .catch(console.log)
    }
}