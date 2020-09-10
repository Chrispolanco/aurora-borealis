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

export const updatePostConnect = post => {
    return {
        type: "UPDATE_POST", 
        post
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

export const createPost = (enteredPostData) => {
    return dispatch => {
        const postData = {
            post: {
                image: enteredPostData.image, 
                description: enteredPostData.description, 
                votes: enteredPostData.votes, 
                latitude: enteredPostData.latitude, 
                longitude: enteredPostData.longitude, 
                date: enteredPostData.date, 
                user_id: enteredPostData.user_id
            }
        }
        return fetch("http://localhost:3000/posts", {
            credentials: "include", 
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(postData)
        })
        .then(response => response.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(addPost(response))
            }
        })
        .catch(console.log)
    }
}

export const updatePost = (enteredPostData) => {
    return dispatch => {
        const postData = {
            post: {
                image: enteredPostData.image, 
                description: enteredPostData.description, 
                votes: enteredPostData.votes, 
                latitude: enteredPostData.latitude, 
                longitude: enteredPostData.longitude, 
                date: enteredPostData.date, 
                user_id: enteredPostData.user_id
            }
        }
        return fetch("http://localhost:3000/posts"+`${enteredPostData.postId}`, {
            credentials: "include", 
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(postData)
        })
        .then(response => response.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(updatePostConnect(response))
            }
        })
        .catch(console.log)
    }
}