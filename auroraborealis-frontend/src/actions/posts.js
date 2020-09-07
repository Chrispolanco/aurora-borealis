export const getPosts = posts => {
    return {
        type: "GET_POSTS", 
        posts 
    }
}

export const fetchPosts = () => {
    return dispatch => {
        return fetch ("http://localhost:3000/posts", {
            credentials: "include", 
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(posts => {
            if (posts.error){
                alert(posts.error)
            } else {
                dispatch(getPosts(posts))
            }
        })
    }
}