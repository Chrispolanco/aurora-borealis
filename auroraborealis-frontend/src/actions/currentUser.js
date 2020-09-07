export const currentUser = user => {
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
        return fetch('http://localhost:3001/login',{
            credentials: "include", 
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(credentials)
        })
        .then(response => {return response.json()})
        .then(user => {
            if(user.error){
                alert(user.error)
            } else{
                dispatch({ type: "CURRENT_USER", user: user})
            }
        })
        .catch(console.log)
    }
}

export const logout = (event) => {
    return dispatch => {
        dispatch(removeCurrentUser())
        return fetch('http://localhost:3001/logout', {
            credentials: "include", 
            method: "DELETE"
        })
        .then(response => response.json())
        .then(json => alert(json.notice))
    }
}

export const currentUser = () => {
    return dispatch => {
        return('http://localhost:3001/get_current_user', {
            credentials: "include", 
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
            }, 
        })
        .then(response => response.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(currentUser(user))
            }
        })
        .catch(console.log)
    }
}
