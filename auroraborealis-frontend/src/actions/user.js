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
        // dispatch(removeCurrentUser())
        return fetch("http://localhost:3000/login",{
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
                console.log("check this")
            } else{
                dispatch({ type: "CURRENT_USER"(response.data)})
                console.log("Logged in ")
            }
        })
        .catch(console.log)
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(removeCurrentUser())
        return fetch("http://localhost:3000/logout", {
            credentials: "include", 
            method: "DELETE"
        })
        .then(response => response.json())
        .then(json => alert(json.notice))
    }
}

export const currentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3000/get_current_user", {
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
                dispatch(setCurrentUser(response.data))
            }
        })
        .catch(console.log)
    }
}

export const signup = (credentials) => {
    return dispatch => {
        const newUser = {
            user: credentials
        }
        return fetch("http://localhost:3000/signup", {
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
            } else {
                dispatch(setCurrentUser(response.data))
            }
        })
        .catch(console.log)
    }
}