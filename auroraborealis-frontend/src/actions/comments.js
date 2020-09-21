import { clearPosts } from './posts'; 
import { fetchPosts } from './posts'; 


export const addCommentConnect = comment => {
    return {
        type: "ADD_COMMENT", 
        comment
    }
}

export const getComments = comments => {
    return {
        type: "GET_COMMENTS", 
        comments 
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
        return fetch(`http://localhost:3000/comments`, {
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
                dispatch(clearPosts())
                dispatch(fetchPosts())
            }
        })
        .catch(console.log)
    }
}

export const fetchComments = () => {
    return (dispatch) => {
        return fetch ("http://localhost:3000/comments", {
            credentials: "include", 
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(comments => { 
            if (comments.error){
                alert(comments.error)
            } else {
                dispatch(getComments(comments))
            }
        })
        .catch(console.log)
    }
}