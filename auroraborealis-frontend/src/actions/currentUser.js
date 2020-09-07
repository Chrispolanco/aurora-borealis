export const currentUser = user => {
    return {
        type: "CURRENT_USER", 
        user 
    }
}

export const blankCurrentUser = () => {
    return {
        type: "Blank_USER"
    }
}

export const signup = (credentials) => {
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