import { clearPosts } from './posts'; 

export const setCurrentUser = user => {
    return {
        type: "CURRENT_USER", 
        user 
    }
}

export const removeCurrentUser = () => {
    return {
        type: "REMOVE_USER"
    }
}

export const login = (credentials) => {
    return(dispatch) => {
        dispatch(removeCurrentUser())
        return fetch("https://auroraborealis-api.herokuapp.com/login",{
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(response => response.json())
        .then(response => {
            if(response.error){
                alert(response.error)
                console.log("Not Logged In")
            } else {
                dispatch(setCurrentUser(response))
            }
        })
        .catch(console.log)
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(removeCurrentUser())
        dispatch(clearPosts())
        return fetch("https://auroraborealis-api.herokuapp.com/logout", {
            credentials: "include", 
            method: "DELETE"
        })
        .then(response => response.json())
        .then(response => alert(response.notice))
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch("https://auroraborealis-api.herokuapp.com/get_current_user", {
            credentials: "include", 
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
            }, 
        })
        .then(response => response.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response))
            }
        })
        .catch(console.log)
    }
}

export const signup = (credentials) => {
    return (dispatch) => {
        const newUser = {
            user: credentials
        }
        return fetch("https://auroraborealis-api.herokuapp.com/signup", {
            credentials: "include", 
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(newUser)
        })
        .then(response => response.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
                console.log("Signup failed")
            } else {
                dispatch(setCurrentUser(response))
            }
        })
        .catch(console.log)
    }
}