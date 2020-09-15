export const addCommentConnect = comment => {
    return {
        type: "ADD_COMMENT", 
        comment
    }
}

export const addComment = (enteredCommentData) => {
    return dispatch => {
        const commentData = {
            comment: {
                context: enteredCommentData.context, 
                user_id: enteredCommentData.user_id, 
                post_id: enteredCommentData.post_id
            }
        }
        return fetch(`http://localhost:3000/posts/${enteredCommentData.post_id}`, {
            credentials: "include", 
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(commentData)
        })
        .then(response => response.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(addCommentConnect(response))
            }
        })
        .catch(console.log)
    }
}